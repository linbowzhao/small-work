<?php
/**
 * Created by PhpStorm.
 * User: bobo
 * Date: 2017/5/26
 * Time: 20:41
 */
//json数据
$handle=fopen('http://v.juhe.cn/toutiao/index?type=top&key=282ac76eeea202bce19509b7d72e2f8f','rb');//r表示只读，b表示打开二进制文件，这里可有可无好像，这个函数是打开了这个文件，
//echo $handle;这里会输出Resource id #3;表示得到一个资源集，和mysql_query语句差不多吧感觉，返回的是一个值说明得到了啥，对其进行操作可以得到类似的内容
$content = "";
while (!feof($handle)) {//如果指针已经到达了文件末尾则停止执行
    $content .= fread($handle, 10000);//读取文件对应length的字符串
}
fclose($handle);//关闭文件
//取回回调函数
if(isset($_REQUEST["jsonCallback"])){
    $jsonCallback=htmlspecialchars($_REQUEST["jsonCallback"]);
}else{$jsonCallback="";}
if($jsonCallback==""){
    echo $content;//输出json格式
}else{echo $jsonCallback."($content)";}//输出jsonp格式

