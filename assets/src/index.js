// 全ての Bootstrap の名前付きエクスポート（named export）をインポート
// import * as bootstrap from 'bootstrap';
 
// スタイルシート（Sass）をインポート
import './index.scss';

import $ from "jquery";

import { HamToggle } from '../js/HamToggle';

$(document).on("click", "#js-ham-toggle", HamToggle);