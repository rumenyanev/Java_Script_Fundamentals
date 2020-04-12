function songs(input) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let numberOfSongs = input.shift();
    let songsArr = [];
    for (let i = 0; i < numberOfSongs; i++) {
        let currentInput = input.shift();
        let [tipeList, name, time] = currentInput.split('_');
        let song = new Song(tipeList, name, time);
        songsArr.push(song);

    }
    let wantedList = input.shift();
    for (const song of songsArr) {
        if (song.typeList == wantedList || wantedList == 'all') {
            console.log(song.name);

        }
    }
}



/*songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']); */
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);

/*⦁	Songs
Define a class Song, which holds the following information about songs: typeList, name and time.
You will receive the input as an array.
The first element n will be the number of songs.
Next n elements will be the songs data in the following format: "{typeList}_{name}_{time}",
and the the last element will be Type List / "all".

Print only the names of the songs which are from that Type List / All songs.
Examples
Input
[3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']

Output
DownTown
Kiss
Smooth Criminal


Input
[4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater']

Output
Andalouse


Input
[2,
'like_Replay_3:15',
'ban_Photoshop_3:48',
'all']

Output
Replay
Photoshop


Solution:
Create a Song class with properties described above

Create new array , where you will store songs

Iterate over the songs:


*/