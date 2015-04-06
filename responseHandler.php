
<?php

if (isset($_GET['task'])) {
	if ($_GET['task'] == 'displayUnit') {
		include_once("config.php");
		$config = new config();
		$questions = array(
			"question"=>$config->question,
			"selection0"=> $config->answer1,
			"selection1"=> $config->answer2,
			"selection2"=> $config->answer3
		);
	echo (json_encode($questions));
	}
		
	
	if ($_GET['task'] == 'select' && isset($_GET['choice']) ) {
		$choice = $_GET['choice'];
		include_once("response.php");
		$response = new response();
		$result = $response->setResponse($choice);
		echo $result;
	}	 

}	

	


