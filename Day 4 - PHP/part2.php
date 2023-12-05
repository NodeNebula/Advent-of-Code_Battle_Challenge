<?php 

$total = 0;

$totalCount = array();
$lines = array_map(fn($line) => explode(":", $line)[1], explode(PHP_EOL, file_get_contents("input.txt")));

$currentLine = 0;
foreach ($lines as $line) {
  $currentLine++;
  $winCount = count(array_intersect(array_map(fn($line) => array_filter(explode(" ", $line)), explode(" | ", $line))[0], array_map(fn($line) => array_filter(explode(" ", $line)), explode(" | ", $line))[1]));

  $totalCount += array($currentLine => [$winCount, 0]);
} 

$currentLine = 0;
foreach ($totalCount as $line) {
  $currentLine++;
  for ($i = 0; $i < $line[0]; $i++) {
    for ($j = 0; $j <= $totalCount[$currentLine][1]; $j++) {
      $totalCount[$currentLine + $i + 1][1] += 1;
    }
  }
}

foreach ($totalCount as $line) {
  print_r($line);
  print("<br>");

  $total += $line[1];
}

print_r($totalCount);
print("<br>" . $total + count($totalCount));
