// Register `phoneList` component, along with its associated controller and template
angular.
  module('chatApp').
  component('chat', {
    templateUrl: 'chat/chat.template.html',
    controller: function ChatController() {
      this.login = sessionStorage["ngchat_author"];
      this.messages = [];
      this.msgDB = {
        messages: ["Hey", "Whazzup?", "How u doin?", "I should go bb", "I'm in love with Angular1!", "Bye"],
        authors: ["Bill", "John", "Mary", "crazy_anonym111"]
      };
      
      this.recieveMessage = function() {
        var getRandomNumber = function(collection) {
          var rand = 0 - 0.5 + Math.random() * (collection.length);
          return Math.round(rand);
        }
        var msgIncoming = {
          author: this.msgDB.authors[getRandomNumber(this.msgDB.authors)],
          text: this.msgDB.messages[getRandomNumber(this.msgDB.messages)], 
          time: new Date().toTimeString().slice(0, 9)
        };
        this.sound();
        this.messages.push(msgIncoming);
      }

      this.sendMessage = function() {
        if (this.msgInput != "") {
          this.messages.push({
            author: this.login,
            text: this.msgInput,
            time: new Date().toTimeString().slice(0, 9)
          });
          this.sound();
          this.msgInput = "";
        } else {
          alert("Sorry, you can not send empty message!")
        }
        this.recieveMessage();
      };

      this.sound = function() {
        var audio = new Audio('sound.mp3');
        audio.play();
      }
    } 
  });