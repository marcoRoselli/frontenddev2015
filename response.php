<?php 

class response 
{
	 
	private function validate ($choice) {
		$pattern = "/[^0-2]/";
		if (preg_match($pattern,$choice)) {
			throw new Exception ("Unauthorized character");
		}
	}
		
	public function setResponse($choice){
		try {
			self::validate($choice);
			$response = file_get_contents("response.json");
			if (!$response) {
				throw new Exception("Unable to open file");
			}
		} catch (Exception $e) {return json_encode([false,$e->getMessage()]); }
		
		$response = json_decode($response);
		$response->results->distribution[$choice]++;
		$response = json_encode($response);
		try {
			$file = fopen("response.json","w");
			if (!$file) {
				throw new Exception("Unable to open file");
			}
		} catch (Exception $e) {return json_encode([false,$e->getMessage()]);}
		fwrite ($file,$response);
		fclose($file);
		return json_encode([true,$response]);
	}
	
}


?>
