// upon play of one audio element stop others
for (audio of document.getElementsByTagName("audio")) {
    audio.addEventListener("play", function(event) {
	for (other of document.getElementsByTagName("audio")) {
	    if ( this != other ) {
		other.pause();
	    }
	}
    });
}

// // Simulate an HTTP redirect:
// window.location.replace("https://sonycslparis.github.io/bassnet/#examples");
