
class Library {
    constructor (name, creator) {
        this.name = name
        this.creator = creator
        this.playlists = []
    }
    addPlaylist(playlist) {
        this.playlists.push(playlist)
    }
} 

class Playlist {
    constructor (name) {
        this.name = name
        this.tracks = []
        this.overallRating = ""
        this.totalDuration = ""
    }

    addTrack(track) {
        this.tracks.push(track)
    }
    overallRating() {
        let counter = 0;
        for (let track of this.tracks) {
            counter += track.rating;
        }
        this.overallRating = (counter / this.tracks.length)
        return this.overallRating
    }
    totalDuration() {
        let counter = 0;
        for (let track of this.tracks) {
            counter += track.length
        }
        return counter
    }
}

class Track {
    constructor (title, rating, length) {
        this.title = title
        this.rating = rating
        this.length = length
    }
}
var rock = new Library('Best of Lucas', 'Lucas')
var jazz = new Playlist('jazz', 'Lucas')
var saxsolo = new Track('sax solo', 5, 800)
var guitarsolo = new Track('guitar solo', 4, 287)
var one = new Track('one',4,246)
var BloodySunday = new Track('Bloody Sunday', 4, 300)
var u2 = new Playlist('u2')

jazz.addTrack(saxsolo)
jazz.addTrack(guitarsolo)
u2.addTrack(one)
u2.addTrack(BloodySunday)
rock.addPlaylist(u2)
console.log(u2.tracks)
console.log(jazz.totalDuration())

