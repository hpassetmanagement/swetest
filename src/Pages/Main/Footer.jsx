import React from "react";
import Position from "../../../src/Assets/Position.png";
import Instagram from "../../../src/Assets/Instagram.png";
import Linkedin from "../../../src/Assets/Linkedin.png";
import Youtube from "../../../src/Assets/Youtube.png";
import "./Main.module.css";

export default function Footer() {
  return (
    <div>
      <div style={{ padding: "72px 0px 120px 0px" }}>
        <table style={{ maxWidth: "1200px", width: "100%" }}>
          <thead>
            <tr style={{ fontWeight: 600 }}>
              <td>PT Henan Putihrai Asset Management</td>
              <td>Bantuan</td>
              <td>Bantuan</td>
              <td>Bantuan</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "90px" }}>
              <td>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    src={Position}
                    style={{ maxWidth: "24px", width: "auto", height: "20px" }}
                    alt="Position icon"
                  />
                  <div style={{ marginLeft: 24 }}>
                    Tamara Center, 7th Floor
                    <br /> Jl. Jend Sudirman Kav 24, Jakarta
                  </div>
                </div>
              </td>
              <td>FAQ</td>
              <td>FAQ</td>
              <td>FAQ</td>
            </tr>
            <tr>
              <td></td>
              <td>Hubungi Kami</td>
              <td>Hubungi Kami</td>
              <td>Hubungi Kami</td>
            </tr>
            <tr>
              <td></td>
              <td>Syarat & Ketentuan</td>
              <td>Syarat & Ketentuan</td>
              <td>Syarat & Ketentuan</td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingRight: 20,
                  }}
                >
                  <img
                    src={Instagram}
                    style={{ paddingRight: 22 }}
                    alt="Instagram icon"
                  ></img>
                  <img
                    src={Linkedin}
                    style={{ paddingRight: 22 }}
                    alt="Linkedin icon"
                  ></img>
                  <img
                    src={Youtube}
                    style={{ paddingRight: 22 }}
                    alt="Youtube icon"
                  ></img>
                </div>
              </td>
              <td>Kebijakan Privasi</td>
              <td>Kebijakan Privasi</td>
              <td>Kebijakan Privasi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
