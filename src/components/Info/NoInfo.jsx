import React, { Component } from "react";
import CollaboratorsLogo from "../modules/CollaboratorsLogo";

export default class NoInfo extends Component {
  render() {
    return (
        <div className="postContent flex center column">
          <div className="blogPost">
            <div className="basePad">
              <div className="flex center column">
              <h1>Grieg</h1>
              <h3>Opus for opus</h3>
              <h4>NRK, BFO, KODE</h4>
              <blockquote>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." <br/>
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..." - Lorem Ipsum
              </blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi dui, ultrices nec semper eget, consequat vel ipsum. Sed et diam odio. Donec lobortis mi vitae laoreet fringilla. Curabitur vel lobortis tortor. Curabitur vestibulum cursus tincidunt. In a tortor vulputate, euismod turpis et, auctor eros. Fusce vitae velit dignissim, commodo leo euismod, venenatis nisi.
              </p>
              <p>
                Donec sollicitudin est mi, vitae rutrum lectus eleifend at. Aenean dapibus ligula purus, ut efficitur ante viverra in. Morbi id leo ut risus pulvinar pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ut felis quis tortor hendrerit dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque suscipit vehicula nisi, id tempus libero vehicula sed. Etiam urna arcu, facilisis sit amet ultrices at, sollicitudin eget velit. Donec at vulputate mi, in imperdiet dui.
              </p>
              <p>
                Maecenas scelerisque tempor nibh ut lobortis. Aenean ac urna sapien. Morbi in ultricies velit. Phasellus varius ut lectus vel hendrerit. In ac pharetra ante, vel ultrices mi. Aenean dignissim magna vitae mi suscipit, vitae dignissim sapien imperdiet. Aliquam erat volutpat.
              </p>
              <p>
                Nam tempus tristique eros vel aliquet. Pellentesque facilisis pharetra ipsum in facilisis. Fusce id dolor ligula. Aenean tincidunt tincidunt odio in venenatis. Morbi condimentum ultrices elit eget dictum. Cras vulputate nunc nisl, sed ultrices nisi rutrum et. Curabitur eu est rhoncus, condimentum orci et, laoreet velit. Vivamus consequat justo nulla, a scelerisque mauris sagittis quis. Proin iaculis massa mauris, sed iaculis justo rutrum vitae.

                Nulla non quam pharetra, rutrum ante id, auctor turpis. Duis dignissim bibendum sem at tincidunt. Nullam at finibus nulla, varius suscipit massa. Nullam pretium est felis, nec suscipit ligula maximus sed. Integer sed sodales odio. Integer faucibus blandit orci at scelerisque. Nunc tempor ligula in velit posuere, sed luctus mi euismod.
              </p>
              <div className="flex column center">
                <h2>Et samarbeid mellom</h2>
                <CollaboratorsLogo />
              </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
