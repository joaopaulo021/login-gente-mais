var myName = prompt("Digite seu nome");


function sendMessage() {

    var message = document.getElementById("message").value
    document.getElementById("message").value = '';
    firebase.database().ref("messages").push().set({
        "sender": myName,
        "message": message
    })

    return false
}

firebase.database().ref("messages").on("child_added", function(snapshot) {
    let html = ""
    let msg = snapshot.val().message
    let sender = snapshot.val().sender



    html += "<div id='message-container'>"
    html += "<div id='message-sender'>"
    html += sender + ": "
    html += "</div>"


    html += "<div id='message-area'>"
    html += msg
    html += "</div>"
    document.getElementById("messages").innerHTML += html
    scrollDown()

})


function scrollDown() {
    chatWindow = document.getElementById('messages');
    var xH = chatWindow.scrollHeight;
    chatWindow.scrollTo(0, xH);

}