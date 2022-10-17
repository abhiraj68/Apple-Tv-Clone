function navbar() {
    return `
    <div id="logo">
        <a href="../index.html"><img src="https://tv.apple.com/assets/brands/Apple_TV_plus_logo_white-2721485772b7d06c4e33379ce990870e.svg" alt=""></a>
    </div>
    <div id="user_nav">
        <i class="fa-solid fa-magnifying-glass" id="glass"></i>

        <input id="search_input"  type="search" placeholder="Search">
        
        <button id="mic">
            <i  class="fa-solid fa-microphone"></i>
        </button>

        <div class="landing_navbar_signin ml-5">
        <button onclick="opensignin()" id="signin" class="landing_navbar_button d-flex">
          
          <div class="logo_text">
            <a id="logo" >Sign In</a>
          </div>
        </button>
      </div>

    </div>`;
}

export default navbar;