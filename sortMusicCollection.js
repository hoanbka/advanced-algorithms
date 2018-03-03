// sortMusicCollection = A => A.map(x =>
// {
//         p = x.split(",")
//         t = JSON.parse(require(`child_process`).execSync(`curl "https://api.discogs.com/database/search?q=${encodeURIComponent(p[0] + " - " + p[1])}&format=album&token=lUdBlmnTelXlMYZfeGbSPSCpsihqoopJEUrZURJK"`)).results[0]
        
//         return [x, t.year]
// }).sort().sort((u, v) => u[1] - v[1]).map(e => e[0])


// // solution2
// function sortMusicCollection(a) {
//      g = [];
//      a.map(i => g[i] = JSON.parse(require('child_process').execSync('curl "https://api.discogs.com/database/search?token=YnhUAuSgfpAguuVkUAnfsqsZLCWGLUaxqWmotTNj&type=master&q="'+encodeURI(i))).results[0].year);
//      console.log(g);
//      a.sort(function(x, y) {  
//         p = x.split(",");
//         q = y.split(",");
//         if(g[x] == g[y]){
//             c = p[0].localeCompare(q[0]);
//             return c == 0 ? p[1].localeCompare(q[1]) : c;
//         }
//           return g[x] - g[y];
//       });
//      return a;
// }

// solution 3

function sortMusicCollection(albums) {
    var y=[];
albums.forEach((a,b)=>{
    var g = JSON.parse(require('child_process').execSync('curl --silent "https://api.discogs.com/database/search?q='+a.split(' ').join('|')+'&token=zovWTaRVpFuClbFFoNKpjmAwsOPZFvgYbzzjVliD"'));
    g=g.results[0].year || g.results[1].year
    console.log(g)
    y.push([g,a])
})
    return y.sort((a,b)=>{
        if(a[0]<b[0]){
            return -1
        }else if(a[0]>b[0]){
            return 1
        }else{
            if(a[1]<b[1])
                return -1
            else return 1
        }
    }).map(function(a){return a[1]})
}


//


var albums = ["The Beatles,Please Please Me",
    "Bob Marley and the Wailers,Natty Dread",
    "Pink Floyd,The Dark Side of the Moon",
    "The Doors,The Doors"
]

console.log(sortMusicCollection(albums))