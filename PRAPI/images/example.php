<?php
$file_path = "header.txt";
if(file_exists($file_path)){
$str = file_get_contents($file_path);//将整个文件内容读入到一个字符串中
$str = str_replace("\r\n","<br />",$str);
echo $str;
}
?>
<script type="text/javascript">
<!--
function swap(val){
　　if(val=="left"){
　　　　left.style.display='block';//设置为显示
　　　　center.style.display='none';//设置为隐藏
　　　　right.style.display='none';
　　}else if(val=="center"){
　　　　left.style.display='none';
　　　　center.style.display='block';
　　　　right.style.display='none';
　　}else if(val=="right"){
　　　　left.style.display='none';
　　　　center.style.display='none';
　　　　right.style.display='block';
　　}
　　}
-->
</script>
	<section id="content" class="body">
		<div id="text" class="body">
			<h2>List of some example</h2>
	<ul>
		<ul id="homes">
				<li><a href="example.php#sec1">Alternative cleavage and polyadenylation(APA),Alternative splicing (AS),Alternative transcription initiation (ATI)</a></li>
				<li><a href="example.php#sec2">Natural antisense transcripts(NAT)</a></li>
				<li><a href="example.php#sec9">Circle rna</a></li>
				<li><a href="example.php#sec3">Differential expression analysis of APA</a></li>
				<li><a href="example.php#sec4">Differential expression analysis of AS</a></li>
				<li><a href="example.php#sec5">Differential expression analysis of circle rna</a></li>
				<li><a href="example.php#sec6">Differential expression analysis of NAT</a></li>
				<li><a href="example.php#sec7">Novel Gene</a></li>
				<li><a href="example.php#sec8">Miss annotation gene</a></li><br>
			</ul>
		<li id="sec1">
			<H4>Alternative cleavage and polyadenylation(APA),Alternative splicing (AS),Alternative transcription initiation (ATI)</H4>
			
			Transcript start sites and terminal sites of Iso-Seq reads possessing an end-to-end read alignment with no more than 5bp trimmed/clipped region are kept for the identification of ATI and APA with the default option of PRAPI to discard trimmed/clipped alignment. Micro-heterogeneity sites are clustered with 25nt window and the default number of supporting reads is 2 and 1 for ATI and APA, respectively.<br><br>
			
			Alternative cleavage and polyadenylation(APA),Alternative splicing (AS),Alternative transcription initiation (ATI).<br><br>
			
			PRAPI identifies four major AS types, including intron retention, alternative 5' donor, alternative 3' donor and exon skipping events, according to the exon/intron coordinate characterized by using long-read alignment.<br><br>
			
			<br><a href="example.php">Click to Go back.</a> 
			<div align="center"><img src="images/basic.png"width="500" height="1000"></div>
		</li>
		<li id="sec2">
			<H4>Natural antisense transcripts(NAT).</H4>
			PRAPI identifies NAT pairs that have overlapping regions between two oppositely oriented Iso-Seq. The resulting NAT pairs are mainly categorized into three types: head-to-head, tail-to-tail, and fully overlapping.
			<br>
			<a href="example.php">Click to Go back.</a> 
			<div align="center"><img src="images/nat.png"width="500" height="900"></div>
		</li>
		<li id="sec9">
			<h4>Circle rna.</h4>
			  Circle rna.
			<br><a href="example.php">Click to Go back.</a>
			<div align="center"><img src="images/circ.png"width="500" height="350"></div>
		</li>
		<li id="sec3">
			<h4>Differential expression analysis of APA.</h4>
			If PAS-seq libraries are provided by users, the summit peaks from PAS-Seq will be called and expression level for the peaks matched with the poly(A) sites from Iso-Seq will be calculated to identify differential APA sites using Fisher's exact test.
			
			<br><a href="example.php">Click to Go back.</a>
			<div align="center"><img src="images/de_apa.png"width="500" height="350"></div>
		</li>
		<li id="sec4">
			<h4>Differential expression analysis of AS.</h4>
			PRAPI uses the statistical model from rMATS to identify differential AS events based on RNA-Seq data.
			<br><a href="example.php">Click to Go back.</a>
			<div align="center"><img src="images/de_as.png"width="500" height="600"></div>
		</li>
		<li id="sec5">
			<h4>Differential expression analysis of Circle.</h4>
			Read counts for each circRNAs are calculated using user-provided RNase R treatment libraries or non-poly(A)-selected RNA-Seq to identify differential circRNAs. The P values and FDR are calculated using DEGseq.
			<br><a href="example.php">Click to Go back.</a>
			<div align="center"><img src="images/de_circle.png"width="500" height="400"></div>
		</li>
		<li id="sec6">
			<h4>Differential expression analysis of NAT.</h4>
			Read counts from NAT pairs are calculated using user-provided strand-specific RNA-Seq libraries to identify differential NATs. The P value and FDR are calculated using edgeR.
			<br><a href="example.php">Click to Go back.</a>
			<div align="center"><img src="images/de_nat.png"width="500" height="900"></div>
		</li>
		<li id="sec7">
			<h4>Novel gene.</h4>
			Novel genes are defined as Iso-Seq clusters that have no corresponding gene annotation. The overlapping intervals in exons of all the Iso-Seq reads are merged into unique coordinates to annotate these novel loci.
			
			<br><a href="example.php">Click to Go back.</a>
			<div align="center"><img src="images/novel.png"width="500" height="600"></div>
		</li>
		<li id="sec8">
			<h4>Miss annotation gene.</h4>
			  Mis-annotation of gene is identified when Iso-Seq reads span two or more different genes.
			<br><a href="example.php">Click to Go back.</a>
			<div align="center"><img src="images/miss_annotation.png"width="500" height="700"></div>
		</li>
</ul>
		</div>
	</section>
	
	<?php
$file_path = "footer.txt";
if(file_exists($file_path)){
$str = file_get_contents($file_path);//将整个文件内容读入到一个字符串中
$str = str_replace("\r\n","<br />",$str);
echo $str;
}
?>

