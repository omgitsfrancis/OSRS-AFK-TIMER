var PATH = './resources/imgs/'

var task =  new function(id, title, time, file) {
    this.id = id;
    this.title = title;
    this.totalTime = time;
    this.currentTime = time;
    this.pic = PATH + file;
    this.buildButton = function() {
        var button = '';
        button += '<button id ="' + this.id + '" type="button" class="btn btn-tile">'
        button += '<h2>' + this.title + '</h2>';
        button += '<h2 class="timer"></h2>';
        button += '<img src="' + this.pic + '">';
        button += '</button>';
    }
}

var tasks = [
    new task('cannon', 'Cannonballs', 162, 'cannonball.png'),
    new task('bone', 'Alter Bones', 69, 'bones.png')
];