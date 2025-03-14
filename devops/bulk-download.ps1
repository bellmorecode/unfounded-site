$url = "https://unfounded.neocities.org/"
$local_dir = "C:\_src\unfounded-site\"
$files = "images/broadside_arena.jpg", "images/BSIDE_LARGE_GRID.png", 
    "images/bubble_kitchen.jpg", "images/Janes_house.jpg", "images/logo.png", 
    "images/prota_checkpoint.jpg", "images/prota_hq.jpg",
    "images/sharecar.jpg", "images/slum_towers.jpg", "neocities.png"
    , "rpg-style.css", "not_found.html", "favicon.ico", "broadside-rpg.htm"

foreach($file in $files) {

    $output = $local_dir + ($file.Replace("/", "\"))
    Invoke-WebRequest -UseBasicParsing -Uri ($url + $file) -OutFile $output
}

Write-Host "Done"