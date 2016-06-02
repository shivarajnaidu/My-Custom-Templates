function UV_SCRIPTS() {

/*url Sharing code.. */
function UV_Sharer() {
  "use strict";
  let headerFooterSocialSharingbuttons = document.querySelectorAll(".staticSocialshare-links-cls");

  for (let i = 0, n = headerFooterSocialSharingbuttons.length; i < n; i++) {
    let a = headerFooterSocialSharingbuttons[i];
    a.href = a.href + location.pathname;
  }

  function socialSharinglinkCreator() {

    function elementCreator(reqElement) {
      let elem = document.createElement(reqElement.name);
      elem.className = reqElement.class_name || "";
      elem.id = reqElement.id || "";
      elem.title = reqElement.title || "";
      return elem;
    }

    function linkCreator(link_) {
      let a = elementCreator({name: "A", class_name: link_.cname, id: link_.id, title: link_.title});
      a.text = link_.text || "#";
      a.href = link_.href || "#";
      a.target = link_.target || "_blank";
      return a;
    }
    
    let sharingButtonsclassname = "social-sharing-buttons";

    let facebook = {};
    facebook.text = "Facebook";
    facebook.href = "https://www.facebook.com/sharer.php?u=" + location.href;
    facebook.cname = sharingButtonsclassname;
    facebook.title = "Share On Facebook";
    facebook.id = "fb-sharer-uv";

    let twitter = {};
    twitter.text = "Twitter";
    twitter.href = "https://twitter.com/share?url=" + location.href;
    twitter.cname = sharingButtonsclassname;
    twitter.title = "Share On Twitter";
    twitter.id = "twitter-sharer-uv";

    let googlePlus = {};
    googlePlus.text = "Google+";
    googlePlus.href = "https://plus.google.com/share?url=" + location.href;
    googlePlus.cname = sharingButtonsclassname;
    googlePlus.title = "Share On Google Plus";
    googlePlus.id = "gplus-sharer-uv";

    let reddit = {};
    reddit.text = "Reddit";
    reddit.href = "https://www.reddit.com/submit?url=" + location.href;
    reddit.cname = sharingButtonsclassname;
    reddit.title = "Share On Reddit";
    reddit.id = "reddit-sharer-uv";

    let linkedin = {};
    linkedin.text = "linkedin"
    linkedin.href = "https://www.linkedin.com/shareArticle?url=" + location.href;
    linkedin.cname = sharingButtonsclassname;
    linkedin.title = "Share On LinkedIn"
    linkedin.id = "linkedin-sharer-uv";

    let facebookButton = linkCreator(facebook);
    let googleplusButton = linkCreator(googlePlus);
    let twitterButton = linkCreator(twitter);
    let redditButton = linkCreator(reddit);
    let linkedinButton = linkCreator(linkedin);

    let containerDiv = elementCreator({name: "DIV", id: "social-sharing-link-container-layout"});
    containerDiv.appendChild(facebookButton);
    containerDiv.appendChild(twitterButton);
    containerDiv.appendChild(googleplusButton);
    containerDiv.appendChild(linkedinButton);
    containerDiv.appendChild(redditButton);
    document.body.appendChild(containerDiv);

    function socialShareLayouthandler(event) {
      containerDiv.style.display = "none";
      document.body.removeChild(containerDiv);
    }
    containerDiv.addEventListener("click", socialShareLayouthandler);
  }


  /*heading sharer link creator*/
  function idLinkcreator(ElementList) {
    let x = document.querySelectorAll(ElementList) || {};
    let b = document.createTextNode("\u00A0"); //unicode char for white space
    function linkCreator(link) {
      let a = document.createElement("A");
      a.text = link.text || "#";
      a.href = link.href || "#";
      a.target = link.target || "_self";
      a.className = link.classname || "";
      a.id = link.id || "";
      return a;
    }

    for(let n = 0, xl = x.length; n < xl; n++) {
      let i = x[n];
      let s = {text:"\u26a1", href:"#"+x[n].id, target:"_self", classname:"sharing-links"};
      i.appendChild(b);
      i.appendChild(linkCreator(s));
    }
  }

  idLinkcreator("h2");

  function sharingHandler(event) {
	  if (event.target.className == "sharing-links") {
	  	socialSharinglinkCreator();
	  };
  }

  document.addEventListener("click", sharingHandler);

}

UV_Sharer();

}
