<?php
//IMathAS:  Delete a drill assessment
//(c) 2015 David Lippman

/*** master php includes *******/
require("../init.php");


/*** pre-html data manipulation, including function code *******/

//set some page specific variables and counters
$overwriteBody = 0;
$body = "";
$pagetitle = "Delete Drill";
$curBreadcrumb = "$breadcrumbbase <a href=\"course.php?cid=". Sanitize::courseId($_GET['cid']) ."\">".Sanitize::encodeStringForDisplay($coursename)."</a> &gt; Delete Drill";
$daid = Sanitize::onlyInt($_GET['id']);
if (!(isset($_GET['cid'])) || !(isset($_GET['block']))) { //if the cid is missing go back to the index page
	$overwriteBody = 1;
	$body = "You need to access this page from the link on the course page";
} elseif (!(isset($teacherid))) {  //there is a cid but the user isn't a teacher
	$overwriteBody = 1;
	$body = "You need to log in as a teacher to access this page";
} elseif (isset($_REQUEST['remove'])) { // a valid delete request loaded the page
	$cid = Sanitize::courseId($_GET['cid']);
	$block = Sanitize::stripHtmlTags($_GET['block']);

	if ($_POST['remove']=="really") {
		$stm = $DBH->prepare("SELECT id FROM imas_items WHERE typeid=:typeid AND itemtype='Drill' AND courseid=:courseid");
		$stm->execute(array(':typeid'=>$daid, ':courseid'=>$cid));
		if ($stm->rowCount()>0) {
			$itemid = $stm->fetchColumn(0);
			$DBH->beginTransaction();
			$stm = $DBH->prepare("DELETE FROM imas_items WHERE id=:id");
			$stm->execute(array(':id'=>$itemid));
			$stm = $DBH->prepare("DELETE FROM imas_drillassess WHERE id=:id");
			$stm->execute(array(':id'=>$daid));
			$stm = $DBH->prepare("DELETE FROM imas_drillassess_sessions WHERE drillassessid=:drillassessid");
			$stm->execute(array(':drillassessid'=>$daid));
			$stm = $DBH->prepare("SELECT itemorder FROM imas_courses WHERE id=:id");
			$stm->execute(array(':id'=>$cid));
			$items = unserialize($stm->fetchColumn(0));

			$blocktree = explode('-',$block);
			$sub =& $items;
			for ($i=1;$i<count($blocktree);$i++) {
				$sub =& $sub[$blocktree[$i]-1]['items']; //-1 to adjust for 1-indexing
			}
			$key = array_search($itemid,$sub);
			if ($key!==false) {
				array_splice($sub,$key,1);
				$itemorder = serialize($items);
				$stm = $DBH->prepare("UPDATE imas_courses SET itemorder=:itemorder WHERE id=:id");
				$stm->execute(array(':itemorder'=>$itemorder, ':id'=>$cid));
			}
		}
		$DBH->commit();
		$btf = isset($_GET['btf']) ? '&folder=' . Sanitize::encodeUrlParam($_GET['btf']) : '';
		header('Location: ' . $GLOBALS['basesiteurl'] . "/course/course.php?cid=".Sanitize::courseId($_GET['cid']) .$btf. "&r=" . Sanitize::randomQueryStringParam());

		exit;
	} else {
		$stm = $DBH->prepare("SELECT name FROM imas_drillassess WHERE id=:id AND courseid=:cid");
		$stm->execute(array(':id'=>$daid, ':cid'=>$cid));
		$itemname = $stm->fetchColumn(0);
	}
}

/******* begin html output ********/
require("../header.php");

/**** post-html data manipulation ******/
// this page has no post-html data manipulation

/***** page body *****/
/***** php display blocks are interspersed throughout the html as needed ****/
if ($overwriteBody==1) {
	echo $body;
} else {
?>
	<div class=breadcrumb><?php echo $curBreadcrumb ?></div>
	<h2><?php echo Sanitize::encodeStringForDisplay($itemname); ?></h2>
	Are you SURE you want to delete this Drill Assessment and all associated student work?
	<form method="POST" action="deletedrillassess.php?cid=<?php echo Sanitize::courseId($_GET['cid']); ?>&block=<?php echo Sanitize::encodeUrlParam($block) ?>&id=<?php echo Sanitize::onlyInt($_GET['id']) ?>">
	<p>
	<button type=submit name="remove" value="really">Yes, Delete</button>
	<input type=button value="Nevermind" class="secondarybtn" onClick="window.location='course.php?cid=<?php echo Sanitize::courseId($_GET['cid']); ?>'">
	</p>
	</form>

<?php
}
	require("../footer.php");
?>
