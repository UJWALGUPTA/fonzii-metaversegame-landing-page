import React from 'react';

import logo from '../assets/collection/gog-logo.webp';

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="mt-5 pt-5">
          <div className="text-center">
            <img src={logo} alt="logo" className="img-fluid" />
            <div className="mt-3">
              <p>
                <a href="https://www.guildofguardians.com/" class="link-light">
                  Guild of Guardians
                </a>
              </p>
              <p>
                <a href="https://www.sandbox.game/en/" class="link-light">
                  Sandbox
                </a>
              </p>
              <p>
                <a href="https://market.immutable.com/assets?collection=0xee972ad3b8ac062de2e4d5e6ea4a37e36c849a11" class="link-light">
                  Market
                </a>
              </p>
            </div>
          </div>
          <div className="text-center">
            <div>
              <a href="https://twitter.com/GuildOfGuardian" class="link-light">
                <i class="bi bi-twitter fs-1 px-3"></i>
              </a>
              <a href="https://discord.gg/UdejGr9Wg7" class="link-light">
                <i class="bi bi-discord fs-1 px-3"></i>
              </a>
            </div>
          </div>
          <p className="text-center mt-3">Copyright by Duo Kemayoran - ITechno Cup PNJ</p>
        </footer>
      </>
    );
  }
}

export default Footer;