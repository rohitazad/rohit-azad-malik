import React from 'react';

const ShareAppComponent = ()=>{
    const onShare = ()=> {
        const title = document.title;
        const url = document.querySelector("link[rel=canonical]")
          ? document.querySelector("link[rel=canonical]").href
          : document.location.href;
        const text = "Learn how to use the share api";
      
        if (navigator.share) {
          navigator
            .share({
              title,
              url,
              text
            })
            .then(() => {
              alert(`Thanks for Sharing!`);
            })
            .catch(err => {
              alert(`Couldn't share ${err}`);
            });
        } else {
          alert(`Not supported 🙅!!`);
        }
      }
    return (
        <>
            <div className="socialShareIcon" onClick={() => onShare()}>
                <span className="appShare">
                    Share to PWA APP  :- <i className="fa-solid fa-share-nodes" id="share"></i>
                </span>
            </div>
            
            {/* https://itnext.io/an-introduction-to-web-push-notifications-a701783917ce */}
        </>
    )
}

export default ShareAppComponent;