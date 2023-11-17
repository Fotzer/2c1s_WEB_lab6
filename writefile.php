<?php
  $myfile = fopen($_POST["objectname"], "w");
  fwrite($myfile, $_POST["object"]);
  fclose($myfile);
?>