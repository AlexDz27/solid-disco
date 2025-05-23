<?php

$url = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=bitcoin,ethereum,bnb,xrp,solana&convert=USD';
$contents = file_get_contents($url, false, stream_context_create([
  'http' => [
    'method' => 'GET',
    'header' => "X-CMC_PRO_API_KEY: b887ac06-0fed-4346-a111-9a5afde07dfe"
  ]
]));

$contents = json_decode($contents, true);

$hasErr = $contents['status']['error_code'] === 0 ? false : true;

$d = [
  'status' => $hasErr ? 'ERR' : 'OK',
  'payload' => null
];
if ($d['status'] === 'ERR') {
  echo '{"status": "ERR"}';
  die();
}

$d['payload'] = [
  'btc' => number_format($contents['data']['1']['quote']['USD']['price'], 2),
  'eth' => number_format($contents['data']['1027']['quote']['USD']['price'], 2),
  'bnb' => number_format($contents['data']['1839']['quote']['USD']['price'], 2),
  'xrp' => number_format($contents['data']['52']['quote']['USD']['price'], 2),
  'sol' => number_format($contents['data']['5426']['quote']['USD']['price'], 2)
];

echo json_encode($d);