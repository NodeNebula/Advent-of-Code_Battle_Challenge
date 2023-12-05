<?php

$total = 0;

foreach (explode(PHP_EOL, file_get_contents('input.txt')) as &$line) {
  $linePoints = 0;
  foreach (array_filter(explode(" ", explode("|", explode(":", $line)[1])[0])) as &$winningNum) {
    if (in_array($winningNum, array_filter(explode(" ", explode("|", explode(":", $line)[1])[1])))) {
      if ($linePoints === 0) $linePoints++;
      else $linePoints = $linePoints * 2;
    }
  }
  $total += $linePoints;
}

print($total);
