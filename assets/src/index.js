// 全ての Bootstrap の名前付きエクスポート（named export）をインポート
// import * as bootstrap from 'bootstrap';
 
// スタイルシート（Sass）をインポート
import './index.scss';

import $ from "jquery";

import { HamToggle } from '../js/HamToggle';
import { HeaderColorChange } from '../js/HeaderColorChange';
import { HeaderScroll } from '../js/HeaderScroll';
import { HeaderHamNavOff } from '../js/HeaderHamNavOff';

$(document)
  .on("click", "#js-ham-toggle", HamToggle) // ハンバーガーメニューのトグル
  .on("click", ".p-header__nav-link", HeaderScroll) // スクロールしたときにヘッダー分高さをずらす
  .on("click", ".p-header__nav-link", HeaderHamNavOff); // ヘッダーのリンクが押された時にハンバーガーメニューを閉じる
  

$(window)
  .on("scroll", HeaderColorChange); // スクロールに合わせてpcヘッダーの色を変更する