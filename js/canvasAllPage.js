//make by kiddautomata
/*
                                                                                      
                                                                                      
                                   .rUGM@B@OqLi                                       
                               .u@B@B@B@B@B@B@B@BMr                                   
                  :iv7vLPJ   r@B@B@B@@85uYFZ@@@B@B@BO.                                
               SB@B@B@B@B  rB@B@B@j            iE@B@@@M                               
             0@B@B@B@B@u  @B@B@O.   1B@B@@@,      rB@B@BL                             
            B@B@BJ       .;:.,       .r@B@B@J       v@B@@0                            
           @@@@0                        :@@@@:        @B@B0                           
          ;@B@B         .@               i@@B@         @B@Bi                          
          SB@Bu          B.               @B@B         :@B@@                          
          2@B@u    :O@q. @,iF:            @@B@          @@B@,                         
          5B@B1      i7O:NMB@B            @B@B          YB@BL                         
          2@@@U        1@@@@B,            i         7@@@B@B@@@B@k                     
          1B@@1        B@B@B@v             .:rJu2u5,  @B@B@@@@@,                      
          U@B@U         q@B@BE         7B@B@B@B@B@B@O  r@@B@BU  L@BO:                 
          1B@B2     UOv kB@B@B@u     7@B@B@B@@@B@B@B@@.  M@B.  B@B@B@B:               
          U@@@2    YB@B@B@B@B@B5B   O@B@BG,               :      rB@@@Bu              
          1B@B5    q@B@B@B@B@B@XP  8@B@B              7            :@B@B7             
          U@B@2    LZ7, ;@@@B@P   .@B@@               BU            :@B@B             
          1B@B5          @@@@B@   FB@@1    ,r         @B             @@B@:            
          2@B@2         v@BMB@r@. k@@@L     X@BL      @@             MB@Bi            
          2B@B1         vB: @S Z  S@@@j       qB@XXB@O@:             B@B@:            
          2@B@2         Y@ :B  @  F@B@J          @B@B@B              BB@B:            
          1B@B1         B@ L@.@B. FB@Bu           7B@B@.             B@B@:            
          U@@@U         B; jBOB@  5@B@Y     .    vB@B@B7             @B@B:            
          5@@B1        .@U OB qB. FB@Bu     2:.  B@B@B@M             B@B@:            
          U@@@2         B: @B  O: 5@@@J     u@@@v u@B@B0         i.  BB@B:            
          FB@@u         @  BU  Bi SB@Bu     @@@B@B@@BMMB@.  . .:M@v  M@B@:            
          u@B@X         Bi @@j  . 5@@@Y  7Biu@B@B@B@B@B@@@B@B@Gri    @B@B:            
           B@B@         L.8M      kB@Bu   :.@B@B@B@B@@@B@B@BNr@.     B@@@:            
           2B@B@r                 S@B@Y     B@ Lu@@@@@B@B@@@r B@     @B@@:            
            jB@@@B@8:    .1vrr7L  SB@@u     O   LB@B@OY7MB@M  U.     B@@@:            
             .G@B@@S  EM  u@B@B@, F@B@J       ;GB@B@B@r  r.@.        BB@B:            
                rF  .B@@@.  MB@B. SB@Bu       i@@BGB@BBkPBZB@B       B@B@:            
                   P@@B@B@N       F@@@J       r@B.v@Bk @B@B@B@P      @@@@:            
                 u@@@@@B@B@B1     kB@Bj       2@B,@Bq  B@B@B@MS      B@B@:            
                .SLi:@B@Br:v1:    F@B@Y       B@B@B:    B@@@@BJ      @B@B:            
                     B@B@         XB@@j      :@MPB@:     B@@@B@M     B@@@:            
                     jB@BM        S@B@J      .B   J@B:   @B@B@B@     @B@B:            
                      @@@B:       q@@BJ             @Bq.  OB@BL,     M@B@:            
                      i@B@B.      X@B@J              rB@:    ,       @B@B:            
                       U@B@Br     i@@@@               @q             @@@@             
                        v@B@BB     @B@B@              r             B@B@S             
                         .@B@B@Mi    ,7X5       ....i:            2@@B@O              
                           vB@B@B@BL       ,7NB@B@B@@:  X0XqPPqMB@B@B@Y               
                             :MB@B@B@B@B@@@B@B@B@BN   GB@B@@@B@B@B@B1                 
                                :5B@B@B@B@B@@@8L.   u@B@B@B@B@BMS7                    
                                      ..,.                                            
                                                                                      
*/
//make by kiddautomata
window.createElement = function(obj) {
	let i, j;
	let dom = document.createElement(obj.dom);
	if (obj.id) {
		dom.id = obj.id
	};
	if (obj.className && obj.dom != 'select') {
		for (i = 0; i < obj.className.length; i++) {
			if (i == 0) {
				dom.className = obj.className[i]
			} else {
				dom.className += ' ' + obj.className[i]
			}
		};
	};
	if (obj.name) {
		dom.name = obj.name
	};
	if (obj.style) {
		for (i in obj.style) {
			dom.style[i] = obj.style[i]
		}
	};
	if (obj.setAttribute) {
		for (i in obj.setAttribute) {
			dom.setAttribute(i, obj.setAttribute[i])
		}
	};
	if (obj.innerHTML) {
		dom.innerHTML = obj.innerHTML
	};
	if (obj.dom == 'input') {
		if (obj.type) {
			dom.type = obj.type
		};
		if (obj.value) {
			dom.value = obj.value
		};
		if (obj.maxLength) {
			dom.maxLength = obj.maxLength
		}
	};
	if (obj.dom == 'select') {
		if (obj.className) {
			let className;
			for (i = 0; i < obj.className.length; i++) {
				if (i == 0) {
					className = obj.className[i]
				} else {
					className += ' ' + obj.className[i]
				}
			};
			dom.setAttribute('class', className)
		};
		if (obj.option) {
			if (obj.option instanceof Object) {
				for (i in obj.option) {
					let option = document.createElement('option');
					option.innerHTML = obj.option[i];
					dom.appendChild(option)
				}
			} else if (obj.option instanceof Array) {
				for (i = 0; i < obj.option.length; i++) {
					let option = document.createElement('option');
					option.innerHTML = obj.option[i];
					dom.appendChild(option)
				}
			};
		}
	};
	if (obj.appendDom) {
		document[obj.appendDom].appendChild(dom)
	} else if (obj.appendId) {
		for (i = 0; i < obj.appendId.length; i++) {
			document.getElementById(obj.appendId[i]).appendChild(dom)
		}
	} else if (obj.appendClassName) {
		forLength('ClassName')
	} else if (obj.appendTagName) {
		forLength('TagName')
	};

	function forLength(a) {
		let b = 'append' + a;
		for (i in obj[b]) {
			for (j = 0; j < obj[b][i].length; j++) {
				document['getElementsBy' + a](i)[obj[b][i][j]].appendChild(dom)
			}
		};
	}
};

window.createSelectElement = function(page, id, lang, append, cid) {
	const select = document.createElement("select");
	select.id = id;
	select.setAttribute('class', 'left-select');
	let text;
	if (id == 'kai' || id == 'kaini') {
		text = textVal['material']['fontLogo']
	} else if (page == 'full' || page == 'full_x2') {
		text = textVal[page + 'Material']
	} else {
		text = textVal['material']
	};
	for (i in text[id]) {
		if (cid != undefined && i != 0) {
			for (j in text[cid]) {
				const option = document.createElement('option');
				option.innerHTML = text[id][i] + text[cid][j];
				select.appendChild(option)
			}
		} else {
			const option = document.createElement('option');
			option.innerHTML = text[id][i];
			select.appendChild(option)
		}
	};
	document.getElementById(append).appendChild(select)
};

window.delExportDiv = function (a){
		document.getElementById(a).remove();
	}

function controlMove(cas, ctx, page, dom) {
	cas.onmousedown = function(e) {
		let xd, yd, xm, ym;
		xm = e.clientX;
		ym = e.clientY;
		xd = xm - log[page][log[page].state].x;
		yd = ym - log[page][log[page].state].y;
		cas.onmousemove = function(e) {
			xm = e.clientX;
			ym = e.clientY;
			if (page == 'full' || page == 'full_x2' || page == 'special' || page == 'position') {
				log[page][log[page].state].x = xm - xd;
				log[page][log[page].state].y = ym - yd
			} else {
				dom.plvi.value = log[page][log[page].state].x = xm - xd;
				dom.ptvi.value = log[page][log[page].state].y = ym - yd
			};
			rect[page].rectImg()
		};
		cas.onmouseup = function() {
			cas.onmousemove = null;
			cas.onmouseup = null
		}
	};
	document.onkeydown = function(ev, show) {
		let oEvent = ev || event;
		if (oEvent.keyCode == 37) {
			if (page == 'full' || page == 'full_x2' || page == 'special' || page == 'position') {
				log[page][log[page].state].x = log[page][log[page].state].x - 1
			} else {
				dom.plvi.value = log[page][log[page].state].x = log[page][log[page].state].x - 1
			}
		} else if (oEvent.keyCode == 39) {
			if (page == 'full' || page == 'full_x2' || page == 'special' || page == 'position') {
				log[page][log[page].state].x = log[page][log[page].state].x + 1
			} else {
				dom.plvi.value = log[page][log[page].state].x = log[page][log[page].state].x + 1
			}
		} else if (oEvent.keyCode == 38) {
			if (page == 'full' || page == 'full_x2' || page == 'special' || page == 'position') {
				log[page][log[page].state].y = log[page][log[page].state].y - 1
			} else {
				dom.ptvi.value = log[page][log[page].state].y = log[page][log[page].state].y - 1
			}
		} else if (oEvent.keyCode == 40) {
			if (page == 'full' || page == 'full_x2' || page == 'special' || page == 'position') {
				log[page][log[page].state].y = log[page][log[page].state].y + 1
			} else {
				dom.ptvi.value = log[page][log[page].state].y = log[page][log[page].state].y + 1
			}
		};
		rect[page].rectImg()
	};
	cas.oncontextmenu = function(e) {
		e.preventDefault()
	};
	if (document.getElementById("plvi")) {
		document.getElementById("plvi").oninput = function() {
			log[page][log[page].state].x = dom.plvi.value;
			rect[page].rectImg()
		}
	};
	if (document.getElementById("ptvi")) {
		document.getElementById("ptvi").oninput = function() {
			log[page][log[page].state].y = dom.ptvi.value;
			rect[page].rectImg()
		}
	};
};

function controlSize(cas, page, dom, img) {
	document.getElementById("cri").oninput = function() {
		imgSizeControl(this)
	};
	document.getElementById("cvi").oninput = function() {
		imgSizeControl(this)
	};

	function imgSizeControl(p) {
		let a = document.getElementById("cri");
		let b = document.getElementById("cvi");
		if (b.value > 100 || a.value > 100 || b.value < 0 || a.value < 0) {
			a.value = 100;
			b.value = 100;
			log[page][log[page].state].w = img.width;
			log[page][log[page].state].h = img.height
		};
		let aa = parseFloat(a.value);
		let bb = parseFloat(b.value);
		if (p.id == 'cri') {
			log[page][log[page].state].size = b.value = aa;
			log[page][log[page].state].w = img.width * (aa * 0.01);
			log[page][log[page].state].h = img.height * (aa * 0.01)
		} else if (p.id == 'cvi') {
			log[page][log[page].state].size = a.value = bb;
			log[page][log[page].state].w = img.width * (bb * 0.01);
			log[page][log[page].state].h = img.height * (bb * 0.01)
		};
		rect[page].rectImg()
	};
	document.getElementById("rri").oninput = function() {
		imgRotateControl(this)
	};
	document.getElementById("rvi").oninput = function() {
		imgRotateControl(this)
	};

	function imgRotateControl(p) {
		let a = document.getElementById("rri");
		let b = document.getElementById("rvi");
		if (b.value > 180 || a.value > 180 || b.value < -180 || a.value < -180) {
			a.value = 0;
			b.value = 0
		};
		let aa = parseFloat(a.value);
		let bb = parseFloat(b.value);
		if (p.id == 'rri') {
			log[page][log[page].state].angle = b.value = aa
		} else if (p.id == 'rvi') {
			log[page][log[page].state].angle = a.value = bb
		};
		rect[page].rectImg()
	};
	cas.onmouseover = function(e) {
		cas.onmousewheel = function(e) {
			if (e.wheelDelta > 0 && e.wheelDeltaX == 0 && e.wheelDeltaY > 0) {
				dom.cvi.value = dom.cvi.value * 1 + 1;
				imgSizeControl(cvi)
			} else if (e.wheelDelta < 0 && e.wheelDeltaX == 0 && e.wheelDeltaY < 0) {
				dom.cvi.value = dom.cvi.value * 1 - 1;
				imgSizeControl(cvi)
			} else if (e.wheelDelta > 0 && e.wheelDeltaX > 0 && e.wheelDeltaY == 0) {
				dom.rvi.value = dom.rvi.value * 1 - 1;
				imgRotateControl(rvi)
			} else if (e.wheelDelta < 0 && e.wheelDeltaX < 0 && e.wheelDeltaY == 0) {
				dom.rvi.value = dom.rvi.value * 1 + 1;
				imgRotateControl(rvi)
			}
		};
		cas.onmouseout = function() {
			cas.onmousewheel = null;
			cas.onmouseout = null
		}
	};
};

function controlState(page, dom, img) {
	if (document.getElementById("state_normal")) {
		document.getElementById("state_normal").onclick = function() {
			changeStateImg(this.id)
		}
	};
	if (document.getElementById("state_damage")) {
		document.getElementById("state_damage").onclick = function() {
			changeStateImg(this.id)
		}
	};

	function changeStateImg(id) {
		if (dom.nsi) {
			dom.nsi.style.display = 'none'
		};
		if (dom.dsi) {
			dom.dsi.style.display = 'none'
		};
		if (dom.ndi) {
			dom.ndi.style.display = 'none'
		};
		if (dom.ddi) {
			dom.ddi.style.display = 'none'
		};
		if (dom.nui) {
			dom.nui.style.display = 'none'
		};
		if (dom.dui) {
			dom.dui.style.display = 'none'
		};
		if (id == 'state_normal') {
			if (page == 'full_x2') {
				img.src = imgData[imgData.level].orgNx2
			} else if (page == 'special') {
				img.src = imgData[imgData.level].orgNsp
			} else if (page == 'full') {
				img.src = imgData[imgData.level].orgN
			} else if (page == 'character_up' || page == 'remodel') {
				img.src = imgData[imgData.level].full_x2
			} else {
				img.src = imgData[imgData.level].full
			};
			log[page].state = 'normal';
			if (dom.nsi) {
				dom.nsi.style.display = 'inline-block'
			};
			if (dom.ndi) {
				dom.ndi.style.display = 'inline-block'
			};
			if (dom.nui) {
				dom.nui.style.display = 'inline-block'
			}
		} else if (id == 'state_damage') {
			if (page == 'full_x2') {
				img.src = imgData[imgData.level].orgDx2
			} else if (page == 'special') {
				img.src = imgData[imgData.level].orgNsp
			} else if (page == 'full') {
				img.src = imgData[imgData.level].orgD
			} else if (page == 'character_up' || page == 'remodel') {
				img.src = imgData[imgData.level].full_x2_dmg
			} else {
				img.src = imgData[imgData.level].full_dmg
			};
			log[page].state = 'damage';
			if (dom.dsi) {
				dom.dsi.style.display = 'inline-block'
			};
			if (dom.ddi) {
				dom.ddi.style.display = 'inline-block'
			};
			if (dom.dui) {
				dom.dui.style.display = 'inline-block'
			};
		};
		if(dom.cri){dom.cri.value = dom.cvi.value = parseFloat(log[page][ log[page].state ].size);};
		if(dom.rri){dom.rri.value = dom.rvi.value = parseFloat(log[page][ log[page].state ].angle);};
		if(dom.plvi){dom.plvi.value = log[page][ log[page].state ].x;};
		if(dom.ptvi){dom.ptvi.value = log[page][ log[page].state ].y;};
	};
};

function featherOperation() {
	let ih = canvas.height;
	let iw = canvas.width;
	let value = (iw + ih) * 0.05;
	let isize = parseInt(value);
	cansText.clearRect(0, 0, canvas.width, canvas.height);
	cansText.globalCompositeOperation = "source-over";
	cansText.drawImage(img, x, y, imgW, imgH);
	cansText.save();
	cansText.globalCompositeOperation = "destination-out";
	addFrameMask(cansText, 0, 0, iw, ih, isize, 255);
	cansText.restore()
};

function addFrameMask(ctx, x, y, w, h, size, color) {
	let style;
	const cn = 1;
	style = setLinearStyle(ctx, x + size, y + size + cn, x + size, y + cn, color);
	ctx.fillStyle = style;
	ctx.fillRect(x + size, y, w - (size * 2), size);
	style = setRadialStyle(ctx, x + size, y + size, 0, x + size, y + size + cn, size, color);
	ctx.fillStyle = style;
	ctx.fillRect(x, y, size, size);
	style = setLinearStyle(ctx, x + size, y + size, x + cn, y + size, color);
	ctx.fillStyle = style;
	ctx.fillRect(x, y + size, size, h - (size * 2));
	style = setRadialStyle(ctx, x + size, y + h - size, 0, x + size, y + h - size - cn, size, color);
	ctx.fillStyle = style;
	ctx.fillRect(x, y + h - size, size, size);
	style = setLinearStyle(ctx, x + size, y + h - size, x + size, y + h - cn, color);
	ctx.fillStyle = style;
	ctx.fillRect(x + size, y + h - size, w - (size * 2), size);
	style = setRadialStyle(ctx, x + w - size, y + h - size, 0, x + w - size, y + h - size - cn, size, color);
	ctx.fillStyle = style;
	ctx.fillRect(x + w - size, y + h - size, size, size);
	style = setLinearStyle(ctx, x + w - size, y + size, x + w - cn, y + size, color);
	ctx.fillStyle = style;
	ctx.fillRect(x + w - size, y + size, size, h - (size * 2));
	style = setRadialStyle(ctx, x + w - size, y + size, 0, x + w - size, y + size + cn, size, color);
	ctx.fillStyle = style;
	ctx.fillRect(x + w - size, y, size, size)
};

function setRadialStyle(ctx, x1, y1, r1, x2, y2, r2, color) {
	let tmp = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);
	tmp.addColorStop(0, 'rgba(' + color + ',' + color + ',' + color + ', 0)');
	tmp.addColorStop(0.5, 'rgba(' + color + ',' + color + ',' + color + ', 0)');
	tmp.addColorStop(1, 'rgba(' + color + ',' + color + ',' + color + ', 1)');
	return tmp
};

function setLinearStyle(ctx, x1, y1, x2, y2, color) {
	let tmp = ctx.createLinearGradient(x1, y1, x2, y2);
	tmp.addColorStop(0, 'rgba(' + color + ',' + color + ',' + color + ', 0)');
	tmp.addColorStop(0.5, 'rgba(' + color + ',' + color + ',' + color + ', 0)');
	tmp.addColorStop(1, 'rgba(' + color + ',' + color + ',' + color + ', 1)');
	return tmp
};

function canvasFullPage(page, lang, local) {
	var imgDataN, imgDataD, pageTitle;
	if (page == 'full') {
		imgDataN = imgData[imgData.level].orgN;
		imgDataD = imgData[imgData.level].orgD;
		pageTitle = pageTitleText[0]
	} else if (page == 'full_x2') {
		imgDataN = imgData[imgData.level].orgNx2;
		imgDataD = imgData[imgData.level].orgDx2;
		pageTitle = pageTitleText[8];
		fullMaterial = full_x2Material
	} else if (page == 'special') {
		imgDataN = imgData[imgData.level].orgNsp;
		imgDataD = undefined;
		pageTitle = pageTitleText[9];
		fullMaterial = specialMaterial
	};
	createElement({
		'dom': 'div',
		'appendId': ['content'],
		'id': page + 'Page',
		'className': [page + '-page-div']
	});
	createElement({
		'dom': 'h1',
		'appendId': [page + 'Page'],
		'className': [page + '-page-text-title', 'page-text-title'],
		'innerHTML': pageTitle
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'LeftDiv',
		'className': [page + '-left-div', 'left-div']
	});
	if (page != 'special') {
		createElement({
			'dom': 'h2',
			'appendId': [page + 'LeftDiv'],
			'innerHTML': pageSettingText[0]
		});
		for (i in fullMaterial) {
			let id = i;
			createElement({
				'dom': 'h3',
				'appendId': [page + 'LeftDiv'],
				'innerHTML': fullText[i]
			});
			createSelectElement(page, id, lang, page + 'LeftDiv')
		}
	};
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'MiddleDiv',
		'className': [page + '-middle-div', 'middle-div']
	});
	createElement({
		'dom': 'canvas',
		'appendId': [page + 'MiddleDiv'],
		'id': page + 'Canvas',
		'className': [page + '-middle-canvas', 'middle-canvas']
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'Canvas'],
		'className': ['canvas-error-text-p'],
		'innerHTML': canvasErrorText[0] + canvasErrorText[1] +
			"<a href='https://www.google.cn/intl/zh-CN/chrome/'>GoogleChrome</a>"
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'RightDiv',
		'className': [page + '-right-div', 'right-div']
	});
	createElement({
		'dom': 'h2',
		'appendId': [page + 'RightDiv'],
		'innerHTML': pageSettingText[1]
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[0]
	});
	if (imgDataN != undefined) {
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'state_normal',
			'className': ['state-normal-input'],
			'name': 'state',
			'type': 'radio',
			'value': 'normal',
		});
		createElement({
			'dom': 'span',
			'appendId': [page + 'RightDiv'],
			'innerHTML': settingRightText[1]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		});
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'saveNormal',
			'className': ['save-input'],
			'type': 'button',
			'value': settingRightText[11]
		});
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'uploadNormal',
			'className': ['save-input'],
			'name': 'file',
			'type': 'file',
			'setAttribute': {
				'accept': 'image/png'
			}
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		})
	};
	if (imgDataD != undefined) {
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'state_damage',
			'className': ['state-damage-input'],
			'name': 'state',
			'type': 'radio',
			'value': 'damage',
		});
		createElement({
			'dom': 'span',
			'appendId': [page + 'RightDiv'],
			'innerHTML': settingRightText[2]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		});
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'saveDamage',
			'className': ['save-input'],
			'type': 'button',
			'value': settingRightText[11]
		});
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'uploadDamage',
			'className': ['save-input'],
			'name': 'file',
			'type': 'file',
			'setAttribute': {
				'accept': 'image/png'
			}
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		})
	};
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[3]
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-min'],
		'innerHTML': '0'
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-max'],
		'innerHTML': '100'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'cri',
		'type': 'range',
		'value': '100',
		'setAttribute': {
			'min': '0',
			'max': '100'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'cvi',
		'type': 'number',
		'value': '100',
		'setAttribute': {
			'min': '0',
			'max': '100',
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[4]
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-min'],
		'innerHTML': '-180°'
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-max'],
		'innerHTML': '180°'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'rri',
		'type': 'range',
		'value': '0',
		'setAttribute': {
			'min': '-180',
			'max': '180'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'rvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'min': '-180',
			'max': '180',
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	const cas = document.getElementById(page + "Canvas");
	const ctx = cas.getContext("2d");
	const casW = 1200;
	const casH = 720;
	cas.setAttribute('width', casW);
	cas.setAttribute('height', casH);
	const canvasDiv = document.getElementById(page + "MiddleDiv");
	canvasDiv.style.width = casW + 2 + 'px';
	const leftWidth = 800 - (casW / 2 + 200);
	document.getElementById(page + "LeftDiv").style.marginLeft = leftWidth + 'px';
	var dom = {};
	dom.nsi = document.getElementById("saveNormal");
	dom.dsi = document.getElementById("saveDamage");
	dom.ndi = document.getElementById("downloadNormal");
	dom.ddi = document.getElementById("downloadDamage");
	dom.nui = document.getElementById("uploadNormal");
	dom.dui = document.getElementById("uploadDamage");
	dom.cri = document.getElementById("cri");
	dom.cvi = document.getElementById("cvi");
	dom.rri = document.getElementById("rri");
	dom.rvi = document.getElementById("rvi");
	var img = new Image();
	img.onload = function() {
		log[page][log[page].state].w = img.width * (log[page][log[page].state].size * 0.01);
		log[page][log[page].state].h = img.height * (log[page][log[page].state].size * 0.01);
		rect[page].rectImg()
	};
	! function() {
		for (i in fullMaterial) {
			let str = imgStrSub(i);
			window[str] = new Image();
			window[str].onload = function() {
				rect[page].rectImg()
			}
		};
	}();
	! function() {
		let selectDom = document.getElementsByClassName('left-select');
		for (i = 0; i < selectDom.length; i++) {
			document.getElementById(selectDom[i].id).onchange = function() {
				let name = fullMaterial[this.id][this.selectedIndex];
				let id = this.id;
				materialSwitch(id, name)
			}
		};
	}();

	function materialSwitch(a, b) {
		let str = imgStrSub(a);
		if (b == 'none') {
			window[str].src = "./img/full/" + b + ".png"
		} else {
			window[str].src = "./img/" + page + "/" + a + "/" + b + ".png"
		}
	};

	function imgStrSub(a) {
		let strA = a;
		let strB = strA.substring(1);
		strA = strA.substring(0, 1);
		strA = strA.toUpperCase();
		let str = 'img' + strA + strB;
		return str
	};
	rect[page].rectImg = function() {
		dom.cri.value = dom.cvi.value = parseFloat(log[page][log[page].state].size);
		dom.rri.value = dom.rvi.value = parseFloat(log[page][log[page].state].angle);
		ctx.clearRect(0, 0, cas.width, cas.height);
		ctx.drawImage(imgRoom, 0, 0, imgRoom.width, imgRoom.height);
		ctx.save();
		log[page][log[page].state].wHalf = log[page][log[page].state].x + (parseInt(log[page][log[page].state].w) / 2);
		log[page][log[page].state].hHalf = log[page][log[page].state].y + (parseInt(log[page][log[page].state].h) / 2);
		ctx.translate(log[page][log[page].state].wHalf, log[page][log[page].state].hHalf);
		ctx.rotate(log[page][log[page].state].angle * Math.PI / 180);
		ctx.translate(-log[page][log[page].state].wHalf, -log[page][log[page].state].hHalf);
		ctx.drawImage(img, log[page][log[page].state].x, log[page][log[page].state].y, log[page][log[page].state].w, log[
			page][log[page].state].h);
		ctx.restore();
		ctx.drawImage(imgUi, 0, 0, imgUi.width, imgUi.height)
	};
	controlMove(cas, ctx, page, dom);
	controlSize(cas, page, dom, img);
	controlState(page, dom, img);
	var imgUrl, showW, showH;

	function saveImg(page) {
		ctx.clearRect(0, 0, cas.width, cas.height);
		var pw = hypotenuse(log[page][log[page].state].w, log[page][log[page].state].angle);
		var ph = hypotenuse(log[page][log[page].state].h, log[page][log[page].state].angle);

		function hypotenuse(long, angle) {
			var radian = Math.abs(2 * Math.PI / 360 * angle);
			return {
				a: Math.sin(radian) * long,
				b: Math.cos(radian) * long
			}
		};
		var rw = parseInt(pw.b + ph.a);
		var rh = parseInt(ph.b + pw.a);
		var redian1 = 2 * Math.PI / 360 * (log[page][log[page].state].angle + 180);
		var redian2 = 2 * Math.PI / 360 * (log[page][log[page].state].angle + 90);
		var lx = 0 + Math.sin(redian1) * (log[page][log[page].state].h);
		var ty = 0 - Math.cos(redian2) * (log[page][log[page].state].w);
		var x, y;
		if (lx < 0) {
			x = Math.abs(lx)
		} else if (lx >= 0) {
			x = 0
		};
		if (ty < 0) {
			y = Math.abs(ty)
		} else if (ty >= 0) {
			y = 0
		};
		cas.setAttribute('width', rw);
		cas.setAttribute('height', rh);
		ctx.save();
		ctx.translate(x, y);
		ctx.rotate(log[page][log[page].state].angle * Math.PI / 180);
		ctx.drawImage(img, 0, 0, log[page][log[page].state].w, log[page][log[page].state].h);
		ctx.restore();
		var arrX = [];
		var arrY = [];
		var imageDatas = ctx.getImageData(0, 0, rw, rh);
		var dataArray = imageDatas.data;
		var o = 0;
		for (var i = 0; i < dataArray.length; i += 4) {
			var r = dataArray[i];
			var g = dataArray[i + 1];
			var b = dataArray[i + 2];
			var a = dataArray[i + 3];
			if (r != 0 && g != 0 && b != 0 && a != 0) {
				var pX = o % rw;
				var pY = parseInt(o / rw);
				arrX.push(pX);
				arrY.push(pY)
			};
			o++
		};
		var maxDataX, minDataX;
		maxDataX = minDataX = arrX[0];
		for (var i = 0; i < arrX.length; i++) {
			if (arrX[i] > maxDataX) {
				maxDataX = arrX[i]
			};
			if (arrX[i] < minDataX) {
				minDataX = arrX[i]
			}
		};
		var maxDataY, minDataY;
		maxDataY = minDataY = arrY[0];
		for (var i = 0; i < arrY.length; i++) {
			if (arrY[i] > maxDataY) {
				maxDataY = arrY[i]
			};
			if (arrY[i] < minDataY) {
				minDataY = arrY[i]
			}
		};
		showW = rw = rw - (rw - maxDataX) - minDataX;
		showH = rh = rh - (rh - maxDataY) - minDataY;
		cas.setAttribute('width', rw);
		cas.setAttribute('height', rh);
		x = x - minDataX;
		y = y - minDataY;
		ctx.save();
		ctx.translate(x, y);
		ctx.rotate(log[page][log[page].state].angle * Math.PI / 180);
		ctx.drawImage(img, 0, 0, log[page][log[page].state].w, log[page][log[page].state].h);
		ctx.restore();
		imgUrl = cas.toDataURL({
			format: 'image/png',
			quality: 1
		});
		cas.setAttribute('width', casW);
		cas.setAttribute('height', casH);
		rect[page].rectImg();
		showOperation(page);
		if (page == 'full' || page == 'full_x2') {
			if (log[page].state == 'normal') {
				imgData[imgData.level][page] = imgUrl
			} else if (log[page].state == 'damage') {
				imgData[imgData.level][page + '_dmg'] = imgUrl
			}
		} else if (page == 'special') {
			if (log[page].state == 'normal') {
				imgData[imgData.level][page] = imgUrl
			} else if (log[page].state == 'damage') {
				imgData[imgData.level][page + '_dmg'] = undefined
			}
		};
		const menu = document.getElementById('menu');
		if (menu) {
			menu.remove()
		};
		createMenuDiv(dataPage.length);
		if (page == 'full') {
			document.getElementById('menu').children[0].setAttribute('checked', 'checked')
		} else if (page == 'full_x2') {
			document.getElementById('menu').children[2].setAttribute('checked', 'checked')
		} else if (page == 'special') {
			document.getElementById('menu').children[4].setAttribute('checked', 'checked')
		}
	};

	function showOperation(a) {
		createCanvas(a, "Show");
		const casS = document.getElementById(a + "ShowCanvas");
		const ctxS = casS.getContext("2d");
		var imgS = new Image();
		imgS.src = imgUrl;
		imgS.onload = function() {
			ctxS.drawImage(imgS, 0, 0, imgS.width, imgS.height)
		};
		casS.oncontextmenu = function(e) {
			e.preventDefault();
			delExportDiv(a + 'ShowDiv')
		}
	};

	function createCanvas(a, b) {
		const dcw = window.innerWidth;
		const dch = window.innerHeight;
		createElement({
			'dom': 'div',
			'appendDom': 'body',
			'id': a + 'ShowDiv',
			'className': ['export_div'],
			'style': {
				'width': dcw + 'px',
				'height': dch + 'px',
			},
			'setAttribute': {
				'onclick': 'delExportDiv("' + a + 'ShowDiv")'
			}
		});
		createElement({
			'dom': 'canvas',
			'appendId': [a + 'ShowDiv'],
			'id': a + b + 'Canvas',
			'className': [a + '-middle-canvas', 'middle-canvas'],
			'setAttribute': {
				'width': showW + 'px',
				'height': showH + 'px'
			},
		});
		createElement({
			'dom': 'p',
			'appendId': [a + b + 'Canvas'],
			'className': ['canvas-error-text-p'],
			'innerHTML': canvasErrorText[0] + canvasErrorText[1] +
				"<a href='https://www.google.cn/intl/zh-CN/chrome/'>GoogleChrome</a>"
		})
	};

	function downLoadImg(a) {
		var urlData = {};
		if (a == 'Normal') {
			urlData[page] = imgUrl
		} else if (a == 'Damage') {
			urlData[page + '_dmg'] = imgUrl
		};
		for (i in urlData) {
			const element = document.createElement("a");
			element.download = i;
			element.href = urlData[i];
			document.body.appendChild(element);
			element.click();
			element.remove()
		}
	};

	function upLoadImg(a, b) {
		const fileId = a;
		if (fileId.files == undefined) {
			return
		};
		if (fileId.files.length != 1) {
			return
		};
		let files = fileId.files[0];
		if (files.size < 512) {
			return
		};
		window.uploadData.size = files.size;
		let filesName = files.name;
		let FileType = filesName.substring(filesName.lastIndexOf(".") + 1).toLowerCase();
		if (FileType == 'png') {
			let imgReader = new FileReader();
			imgReader.readAsDataURL(files);
			imgReader.onload = function() {
				let imgResult = this.result;
				if (page == 'full') {
					if (b == 'Normal') {
						img.src = imgDataN = imgData[imgData.level].orgN = imgResult
					} else if (b == 'Damage') {
						img.src = imgDataD = imgData[imgData.level].orgD = imgResult
					}
				} else if (page == 'full_x2') {
					if (b == 'Normal') {
						img.src = imgDataN = imgData[imgData.level].orgNx2 = imgResult
					} else if (b == 'Damage') {
						img.src = imgDataD = imgData[imgData.level].orgDx2 = imgResult
					}
				} else if (page == 'special') {
					if (b == 'Normal') {
						img.src = imgDataN = imgData[imgData.level].orgNsp = imgResult
					} else if (b == 'Damage') {
						img.src = imgDataD = undefined
					}
				};
				rect[page].rectImg()
			}
		};
	};
	! function() {
		if (document.getElementById("saveNormal")) {
			document.getElementById("saveNormal").onclick = function() {
				saveImg(page, 'Normal')
			}
		};
		if (document.getElementById("saveDamage")) {
			document.getElementById("saveDamage").onclick = function() {
				saveImg(page, 'Damage')
			}
		};
		if (document.getElementById("uploadNormal")) {
			document.getElementById("uploadNormal").onchange = function() {
				upLoadImg(this, 'Normal')
			}
		};
		if (document.getElementById("uploadDamage")) {
			document.getElementById("uploadDamage").onchange = function() {
				upLoadImg(this, 'Damage')
			}
		};
		if (document.getElementById("downloadNormal")) {
			document.getElementById("downloadNormal").onclick = function() {
				downLoadImg('Normal')
			}
		};
		if (document.getElementById("downloadDamage")) {
			document.getElementById("downloadDamage").onclick = function() {
				downLoadImg('Damage')
			}
		};
		var levelSelect = document.getElementsByName('level');
		for (i = 0; i < levelSelect.length; i++) {
			document.getElementsByName('level')[i].onclick = function() {
				imgData.level = this.id;
				if (imgDataN != undefined) {
					log[page].state = 'normal';
					if (imgDataD != undefined) {
						document.getElementById('state_damage').checked = false
					};
					document.getElementById('state_normal').checked = true;
					if (dom.nsi) {
						dom.nsi.style.display = 'inline-block'
					};
					if (dom.ndi) {
						dom.ndi.style.display = 'inline-block'
					};
					if (dom.nui) {
						dom.nui.style.display = 'inline-block'
					};
					if (dom.dsi) {
						dom.dsi.style.display = 'none'
					};
					if (dom.ddi) {
						dom.ddi.style.display = 'none'
					};
					if (dom.dui) {
						dom.dui.style.display = 'none'
					}
				};
				if (page == 'full') {
					if (log[page].state == 'normal') {
						img.src = imgDataN = imgData[imgData.level].orgN
					} else if (log[page].state == 'damage') {
						img.src = imgDataD = imgData[imgData.level].orgD
					}
				} else if (page == 'full_x2') {
					if (log[page].state == 'normal') {
						img.src = imgDataN = imgData[imgData.level].orgNx2
					} else if (log[page].state == 'damage') {
						img.src = imgDataD = imgData[imgData.level].orgDx2
					}
				} else if (page == 'special') {
					if (log[page].state == 'normal') {
						img.src = imgDataN = imgData[imgData.level].orgNsp
					} else if (log[page].state == 'damage') {
						img.src = imgDataD = undefined
					}
				};
				rect[page].rectImg()
			}
		};
	}();
	! function() {
		if (imgDataN != undefined) {
			img.src = imgDataN;
			log[page].state = 'normal';
			document.getElementById('state_normal').checked = true;
			if (dom.nsi) {
				dom.nsi.style.display = 'inline-block'
			};
			if (dom.ndi) {
				dom.ndi.style.display = 'inline-block'
			};
			if (dom.nui) {
				dom.nui.style.display = 'inline-block'
			};
			if (dom.dsi) {
				dom.dsi.style.display = 'none'
			};
			if (dom.ddi) {
				dom.ddi.style.display = 'none'
			};
			if (dom.dui) {
				dom.dui.style.display = 'none'
			};
			stateVal = '_n'
		} else if (imgDataN == undefined && imgDataD != undefined) {
			img.src = imgDataD;
			log[page].state = 'damage';
			document.getElementById('state_damage').checked = true;
			if (dom.dsi) {
				dom.dsi.style.display = 'inline-block'
			};
			if (dom.ddi) {
				dom.ddi.style.display = 'inline-block'
			};
			if (dom.dui) {
				dom.dui.style.display = 'inline-block'
			};
			if (dom.nsi) {
				dom.nsi.style.display = 'none'
			};
			if (dom.ndi) {
				dom.ndi.style.display = 'none'
			};
			if (dom.nui) {
				dom.nui.style.display = 'none'
			};
			stateVal = '_d'
		};
		if (page == 'full') {
			imgRoom.src = local + '/' + page + '/room/default_room.png';
			imgUi.src = local + '/' + page + '/ui/uiA.png';
			document.getElementById('room').value = textVal[page + 'Material'].room[0];
			document.getElementById('ui').value = textVal[page + 'Material'].ui[1]
		} else if (page == 'full_x2') {
			imgRoom.src = local + '/' + page + '/room/wedding_room.png';
			imgUi.src = local + '/' + page + '/ui/wedding_ring.png';
			document.getElementById('room').value = textVal[page + 'Material'].room[1];
			document.getElementById('ui').value = textVal[page + 'Material'].ui[1]
		} else if (page == 'special') {
			imgRoom.src = local + '/special/battle_map.png';
			imgUi.src = local + '/full/none.png'
		}
	}()
};

function canvasCardPage(page, lang, local) {
	var imgDataN = imgData[imgData.level].full;
	var imgDataD = imgData[imgData.level].full_dmg;
	createElement({
		'dom': 'div',
		'appendId': ['content'],
		'id': page + 'Page',
		'className': [page + '-page-div']
	});
	createElement({
		'dom': 'h1',
		'appendId': [page + 'Page'],
		'className': [page + '-page-text-title', 'page-text-title'],
		'innerHTML': pageTitleText[1]
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'LeftDiv',
		'className': [page + '-left-div', 'left-div']
	});
	createElement({
		'dom': 'h2',
		'appendId': [page + 'LeftDiv'],
		'innerHTML': pageSettingText[0]
	});
	for (i in material) {
		let id = i;
		if (id != null && id != undefined && id != 'texturePosition' && id != 'shipTypeBg' && id != 'bgBorderDown' && id !=
			'bgBorderUp' && id != 'borderDown' && id != 'borderUp' && id != 'border') {
			createElement({
				'dom': 'h3',
				'appendId': [page + 'LeftDiv'],
				'innerHTML': materialText[i]
			});
			if (id == 'texture') {
				createSelectElement(page, id, lang, page + 'LeftDiv', 'texturePosition')
			} else if (id == 'fontLogo') {
				createSelectElement(page, 'kai', lang, page + 'LeftDiv');
				createSelectElement(page, 'kaini', lang, page + 'LeftDiv')
			} else {
				createSelectElement(page, id, lang, page + 'LeftDiv')
			}
		};
	};
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'MiddleDiv',
		'className': [page + '-middle-div', 'middle-div']
	});
	createElement({
		'dom': 'canvas',
		'appendId': [page + 'MiddleDiv'],
		'id': page + 'Canvas',
		'className': [page + '-middle-canvas', 'middle-canvas']
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'Canvas'],
		'className': ['canvas-error-text-p'],
		'innerHTML': canvasErrorText[0] + canvasErrorText[1] +
			"<a href='https://www.google.cn/intl/zh-CN/chrome/'>GoogleChrome</a>"
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'RightDiv',
		'className': [page + '-right-div', 'right-div'],
		'style': {
			'width': '250px'
		}
	});
	createElement({
		'dom': 'h2',
		'appendId': [page + 'RightDiv'],
		'innerHTML': pageSettingText[1]
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[0]
	});
	if (imgDataN != undefined) {
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'state_normal',
			'className': ['state-normal-input'],
			'name': 'state',
			'type': 'radio',
			'value': 'normal',
		});
		createElement({
			'dom': 'span',
			'appendId': [page + 'RightDiv'],
			'innerHTML': settingRightText[1]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		});
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'saveNormal',
			'className': ['save-input'],
			'type': 'button',
			'value': settingRightText[11]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		})
	};
	if (imgDataD != undefined) {
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'state_damage',
			'className': ['state-damage-input'],
			'name': 'state',
			'type': 'radio',
			'value': 'damage',
		});
		createElement({
			'dom': 'span',
			'appendId': [page + 'RightDiv'],
			'innerHTML': settingRightText[2]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		});
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'saveDamage',
			'className': ['save-input'],
			'type': 'button',
			'value': settingRightText[11]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		})
	};
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[18]
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[19] + ': '
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'plvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[20] + ': '
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'ptvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[3]
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-min'],
		'innerHTML': '0'
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-max'],
		'innerHTML': '100'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'cri',
		'type': 'range',
		'value': '100',
		'setAttribute': {
			'min': '0',
			'max': '100'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'cvi',
		'type': 'number',
		'value': '100',
		'setAttribute': {
			'min': '0',
			'max': '100',
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[4]
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-min'],
		'innerHTML': '-180°'
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-max'],
		'innerHTML': '180°'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'rri',
		'type': 'range',
		'value': '0',
		'setAttribute': {
			'min': '-180',
			'max': '180'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'rvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'min': '-180',
			'max': '180',
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[5]
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'fontStyleNone',
		'name': 'fontStyle',
		'type': 'radio',
		'value': 'none',
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[6]
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'fontStyleKai',
		'name': 'fontStyle',
		'type': 'radio',
		'value': 'kai',
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[7]
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'fontStyleKaini',
		'name': 'fontStyle',
		'type': 'radio',
		'value': 'kaini',
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[8]
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[9] + '：'
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'shipNameText',
		'className': ['shipName_input'],
		'type': 'text',
		'value': shipName.name,
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[10] + '：'
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'shipKanaText',
		'className': ['shipName_input'],
		'type': 'text',
		'value': shipName.yomi,
	});
	const cas = document.getElementById(page + "Canvas");
	const ctx = cas.getContext("2d");
	const casW = 327;
	const casH = 450;
	cas.setAttribute('width', casW);
	cas.setAttribute('height', casH);
	const canvasDiv = document.getElementById(page + "MiddleDiv");
	canvasDiv.style.width = casW + 2 + 'px';
	const leftWidth = 800 - (casW / 2 + 200);
	document.getElementById(page + "LeftDiv").style.marginLeft = leftWidth + 'px';
	const numberTest = /[0-9]/;
	const englishTest = /[A-Za-z]/;
	const kanjiTest = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
	const kanaTest = /[\u3040-\u309F\u30A0-\u30FF]/;
	const japaneseTest = /[\u4E00-\u9FA5\uF900-\uFA2D\u3040-\u309F\u30A0-\u30FF]/;
	var bbux = casW - 78;
	var stbx = casW - 100;
	var dom = {};
	dom.nsi = document.getElementById("saveNormal");
	dom.dsi = document.getElementById("saveDamage");
	dom.ndi = document.getElementById("downloadNormal");
	dom.ddi = document.getElementById("downloadDamage");
	dom.plvi = document.getElementById("plvi");
	dom.ptvi = document.getElementById("ptvi");
	dom.cri = document.getElementById("cri");
	dom.cvi = document.getElementById("cvi");
	dom.rri = document.getElementById("rri");
	dom.rvi = document.getElementById("rvi");
	var img = new Image();
	img.onload = function() {
		log[page][log[page].state].w = img.width * (log[page][log[page].state].size * 0.01);
		log[page][log[page].state].h = img.height * (log[page][log[page].state].size * 0.01);
		rect[page].rectCanvas()
	};
	! function() {
		for (i in material) {
			if (i != null && i != undefined && i != 'texturePosition' && i != 'bgBorderDown') {
				let str = imgStrSub(i);
				window[str] = new Image();
				window[str].onload = function() {
					rect[page].rectCanvas()
				}
			};
		}
	}();
	! function() {
		for (i in cardFontBg) {
			let str = 'fontBg' + i;
			window[str] = new Image();
			window[str].onload = function() {};
			window[str].src = "./img/card/font_bg/fontBg_" + cardFontBg[i] + ".png"
		}
	}();
	! function() {
		let selectDom = document.getElementsByClassName('left-select');
		for (i = 0; i < selectDom.length; i++) {
			document.getElementById(selectDom[i].id).onchange = function() {
				let name;
				if (this.id == 'kai' || this.id == 'kaini') {
					name = material['fontLogo'][this.id][this.selectedIndex]
				} else {
					name = material[this.id][this.selectedIndex]
				};
				let id = this.id;
				let position;
				if (this.id == 'texture') {
					let n = parseInt(this.selectedIndex);
					if (n % 2 == 0) {
						let o = n / 2;
						name = material[this.id][o];
						position = '_down'
					} else {
						let o = (n + 1) / 2;
						name = material[this.id][o];
						position = '_up'
					}
				};
				materialSwitch(id, name, position)
			}
		};
	}();

	function materialSwitch(a, b, c) {
		let str = imgStrSub(a);
		if (b == 'none') {
			window[str].src = "./img/card/" + b + ".png";
			if (a == 'texture') {
				log['material'][a] = 0
			} else {
				log['material'][a] = getNumber(a, b)
			}
		} else {
			if (a == 'texture') {
				window[str].src = "./img/card/" + a + "/" + b + c + ".png";
				log['material'][a] = getNumber(a, b);
				log['material']['texturePosition'] = getNumber('texturePosition', c)
			} else if (a == 'shipType') {
				imgShipType.src = "./img/card/ship_type/" + b + ".png";
				imgShipTypeBg.src = "./img/card/ship_type_bg/" + b + ".png";
				log['material'][a] = getNumber(a, b);
				if (b == 'SSV') {
					bbux = casW - 78 - 50
				} else {
					bbux = casW - 78
				}
			} else if (a == 'kai' || a == 'kaini') {
				imgFontLogo.src = "./img/card/font_logo/" + log['material']['fontLogo']['size'] + "/" + b + ".png";
				log['material']['fontStyle'] = a;
				log['material']['fontLogo'][a] = getNumber(a, b)
			} else {
				window[str].src = "./img/card/" + a + "/" + b + ".png";
				log['material'][a] = getNumber(a, b)
			}
		};

		function getNumber(k, v) {
			if (k == 'kai' || k == 'kaini') {
				for (i = 0; i < material['fontLogo'][k].length; i++) {
					if (material['fontLogo'][k][i] == v) {
						return i
					}
				};
			} else {
				for (j = 0; j < material[k].length; j++) {
					if (k == 'texturePosition') {
						if ('_' + material[k][j] == v) {
							return j
						}
					} else {
						if (material[k][j] == v) {
							return j
						}
					};
				}
			};
		}
	};

	function imgStrSub(a) {
		let strA = a;
		let strB = strA.substring(1);
		strA = strA.substring(0, 1);
		strA = strA.toUpperCase();
		let str = 'img' + strA + strB;
		return str
	};

	function inputClick(a, b) {
		if (a == 'fontlogo') {
			if (b == 'none') {
				imgFontLogo.src = "./img/card/none.png"
			} else {
				let c = dataVal['material']['fontLogo'][b][log['material']['fontLogo'][b]];
				var text = document.getElementById('shipNameText').value;
				if (englishTest.test(text) && !japaneseTest.test(text) && !numberTest.test(text) && !text.match('○')) {
					if (ctx.measureText(text).width < 23) {
						imgFontLogo.src = "./img/card/font_logo/100/" + c + ".png";
						log['material']['fontLogo']['size'] = '100'
					} else if (ctx.measureText(text).width >= 23) {
						imgFontLogo.src = "./img/card/font_logo/75/" + c + ".png";
						log['material']['fontLogo']['size'] = '75'
					}
				} else if (!englishTest.test(text) && japaneseTest.test(text) && !numberTest.test(text) && !text.match('○')) {
					if (text.length < 3 && text.length > 0) {
						imgFontLogo.src = "./img/card/font_logo/100/" + c + ".png";
						log['material']['fontLogo']['size'] = '100'
					} else if (text.length >= 3) {
						imgFontLogo.src = "./img/card/font_logo/75/" + c + ".png";
						log['material']['fontLogo']['size'] = '75'
					}
				} else if (!englishTest.test(text) && japaneseTest.test(text) && numberTest.test(text) && !text.match('○')) {
					imgFontLogo.src = "./img/card/font_logo/100/" + c + ".png";
					log['material']['fontLogo']['size'] = '100'
				} else if (englishTest.test(text) && !japaneseTest.test(text) && numberTest.test(text) && !text.match('○')) {
					imgFontLogo.src = "./img/card/font_logo/100/" + c + ".png";
					log['material']['fontLogo']['size'] = '100'
				} else if (!englishTest.test(text) && japaneseTest.test(text) && !numberTest.test(text) && text.match('○')) {
					imgFontLogo.src = "./img/card/none.png";
					log['material']['fontLogo']['size'] = '100'
				};
				document.getElementById('kai').value = textVal.material['fontLogo']['kai'][log['material']['fontLogo']['kai']];
				document.getElementById('kaini').value = textVal.material['fontLogo']['kaini'][log['material']['fontLogo']['kaini']]
			};
			rect[page].rectFont()
		}
	};

	function fontBgImg() {
		let sntv = document.getElementById("shipNameText").value;
		let luy, luh, cty, cmy, cmh, rmh, rby, rdmy, rdmh, lty, lmy, lmh;
		if (!englishTest.test(sntv) && japaneseTest.test(sntv) && !numberTest.test(sntv) && !sntv.match('○') && sntv.length >
			2) {
			if (log['material']['fontCutH'] >= 270) {
				cty = log['material']['fontCutH'] - 27;
				cmy = log['material']['fontCutH'] - 17
			} else {
				cty = log['material']['fontCutH'] - 17;
				cmy = log['material']['fontCutH'] - 7
			}
		} else if (englishTest.test(sntv) && !japaneseTest.test(sntv) && !numberTest.test(sntv) && !sntv.match('○')) {
			cty = log['material']['fontCutH'] - 27;
			cmy = log['material']['fontCutH'] - 17
		} else if (englishTest.test(sntv) && !japaneseTest.test(sntv) && numberTest.test(sntv) && !sntv.match('○')) {
			cty = log['material']['fontCutH'] - 15;
			cmy = log['material']['fontCutH'] - 5
		} else if (!englishTest.test(sntv) && japaneseTest.test(sntv) && !numberTest.test(sntv) && sntv.match('○')) {
			cty = log['material']['fontCutH'] - 10;
			cmy = log['material']['fontCutH'] - 0
		} else {
			cty = 270 - 27;
			cmy = 270 - 17
		};
		cmh = 253 - cmy + 182;
		luy = cty + 6;
		luh = 249 - luy + 94;
		rmh = log['material']['fontKanaH'];
		rby = cmy + rmh;
		rdmy = rby + 13;
		rdmh = 410 - rdmy;
		lty = luy + luh;
		lmy = lty + 8;
		lmh = 426 - lmy;
		if (rdmh < 0) {
			fontBgRightBottom.src = "./img/card/font_bg/fontBg_right_bottom.png";
			fontBgRightDownMiddle.src = "./img/card/none.png";
			fontBgRightDownBottom.src = "./img/card/none.png"
		} else if (rdmh > 0) {
			fontBgRightBottom.src = "./img/card/font_bg/fontBg_right_down_top.png";
			fontBgRightDownMiddle.src = "./img/card/font_bg/fontBg_right_down_middle.png";
			fontBgRightDownBottom.src = "./img/card/font_bg/fontBg_right_down_bottom.png"
		};
		ctx.drawImage(fontBgCenterTop, 0, cty, 327, 10);
		ctx.drawImage(fontBgCenterMiddle, 0, cmy, 327, cmh);
		ctx.drawImage(fontBgCenterBottom, 0, 435, 327, 15);
		ctx.drawImage(fontBgLeftUp, 0, luy, 327, luh);
		ctx.drawImage(fontBgRightMiddle, 0, cmy, 327, rmh);
		ctx.drawImage(fontBgRightBottom, 0, rby, 327, 13);
		ctx.drawImage(fontBgRightDownMiddle, 0, rdmy, 327, rdmh);
		ctx.drawImage(fontBgRightDownBottom, 0, 410, 327, 40);
		ctx.drawImage(fontBgLeftTop, 0, lty, 327, 8);
		ctx.drawImage(fontBgLeftMiddle, 0, lmy, 327, lmh);
		ctx.drawImage(fontBgLeftBottom, 0, 426, 327, 24);
		rect[page].rectFont()
	};

	function fontCheck(a) {
		const snt = document.getElementById("shipNameText");
		const skt = document.getElementById("shipKanaText");
		if (a.id == "shipNameText") {
			shipNameFont(a.value);
			shipKanaFont(skt.value)
		} else if (a.id == "shipKanaText") {
			shipKanaFont(a.value);
			shipNameFont(snt.value)
		};
		rect[page].rectImg()
	};

	function fontStyleCheck(a) {
		let idKai = document.getElementById('kai');
		let idKaini = document.getElementById('kaini');
		idKai.style.display = 'block';
		idKaini.style.display = 'block';
		idKai.value = '改';
		idKaini.value = '改二';
		if (a == 'none') {
			log['material']['fontStyle'] = 'none';
			log['material']['fontLogo']['size'] = '100';
			idKai.style.display = 'none';
			idKaini.style.display = 'none'
		} else if (a == 'kai') {
			log['material']['fontStyle'] = 'kai';
			log['material']['fontLogo']['size'] = '100';
			idKai.style.display = 'block';
			idKaini.style.display = 'none'
		} else if (a == 'kaini') {
			log['material']['fontStyle'] = 'kaini';
			log['material']['fontLogo']['size'] = '100';
			idKai.style.display = 'none';
			idKaini.style.display = 'block'
		} else if (a == undefined) {}
	};

	function shipNameFont(v) {
		let fsi = log['material']['fontStyle'];
		const ctx = cas.getContext("2d");
		let name = v;
		let x = 26;
		let y = 260;
		var fh = y;
		let letterSpacing = 47;
		let fontLinearStyle, fontRadialStyle;
		if (fsi == 'none') {
			ctx.shadowBlur = 0;
			fontLinearStyle = [
				[0, '#fff'],
				[0.5, '#fff'],
				[1, '#fff']
			];
			fontRadialStyle = [
				[0, '#fff'],
				[1, '#fff']
			]
		} else if (fsi == 'kai') {
			ctx.shadowColor = "#fee69e";
			ctx.shadowOffsetX = 0;
			ctx.shadowOffsetY = 0;
			ctx.shadowBlur = 0;
			fontLinearStyle = [
				[0, '#fdd76c'],
				[0.5, '#ffe9a8'],
				[1, '#fdd76c']
			];
			fontRadialStyle = [
				[0, '#ffe9a8'],
				[1, '#fdd76c']
			]
		} else if (fsi == 'kaini') {
			ctx.shadowColor = "fff799";
			ctx.shadowOffsetX = 0;
			ctx.shadowOffsetY = 0;
			ctx.shadowBlur = 0;
			fontLinearStyle = [
				[0, '#ffab51'],
				[0.25, '#fac269'],
				[0.5, '#fceeb1'],
				[0.75, '#fac269'],
				[1, '#ffab51']
			];
			fontRadialStyle = [
				[0, '#fceeb1'],
				[0.5, '#fac269'],
				[1, '#ffab51']
			]
		};
		if (englishTest.test(name) && !japaneseTest.test(name) && !numberTest.test(name) && !name.match('○')) {
			if (englishTest.test(name) && name.match('/')) {
				firstText = name.substring(0, name.indexOf("/"));
				secondText = name.substring(name.indexOf("/") + 1);
				ctx.save();
				ctx.translate(x, y);
				ctx.rotate(Math.PI / 180 * 90);
				ctx.textBaseline = 'bottom';
				var eyh, elgs, elge;
				fontPositionEnglish();
				fontOption(ctx, ['Linear', elgs, 0, elge, 0], fontLinearStyle, ['35px', 'Vani', [firstText, eyh, -23]], [1,
					"rgba(0,0,0,1)", [firstText, eyh, -23]
				], );
				ctx.save();
				ctx.translate(x, y);
				ctx.rotate(Math.PI / 180 * 90);
				ctx.textBaseline = 'bottom';
				fontOption(ctx, ['Linear', elgs, 0, elge, 0], fontLinearStyle, ['35px', 'Vani', [secondText, eyh, 8]], [1,
					"rgba(0,0,0,1)", [secondText, eyh, 8]
				], );
				log['material']['fontCutH'] = eyh + 270;

				function fontPositionEnglish() {
					ctx.font = '30px Vani';
					let enwA = ctx.measureText(firstText).width;
					let enwB = ctx.measureText(secondText).width;
					let enw;
					if (enwA > enwB) {
						enw = enwA
					} else if (enwB > enwA) {
						enw = enwB
					} else if (enwA == enwB) {
						enw = enwA
					};
					if (enw < 105 && fsi == 'none') {
						eyh = 60
					} else if (enw < 105 && fsi != 'none') {
						eyh = 10
					} else if (enw >= 105 && fsi == 'none') {
						eyh = 145 - enw
					} else if (enw >= 105 & fsi != 'none') {
						eyh = 100 - enw
					};
					elgs = eyh + 10;
					elge = eyh + enw - 10
				}
			} else {
				if (name.length <= 10 && name.length > 0) {
					ctx.save();
					ctx.translate(x, y);
					ctx.rotate(Math.PI / 180 * 90);
					ctx.textBaseline = 'bottom';
					var eyh, elgs, elge;
					fontPositionEnglish();
					fontOption(ctx, ['Linear', elgs, 0, elge, 0], fontLinearStyle, ['50px', 'Vani', [name, eyh, 0]], [1,
						"rgba(0,0,0,1)", [name, eyh, 0]
					], );
					log['material']['fontCutH'] = eyh + 270;

					function fontPositionEnglish() {
						ctx.font = '50px Vani';
						let enw = ctx.measureText(name).width;
						if (ctx.measureText(name).width < 110 && fsi == 'none') {
							eyh = 60
						} else if (ctx.measureText(name).width < 110 && fsi != 'none') {
							eyh = 10
						} else if (ctx.measureText(name).width >= 110 && fsi == 'none') {
							eyh = 165 - enw
						} else if (ctx.measureText(name).width >= 110 & fsi != 'none') {
							eyh = 130 - enw
						};
						elgs = eyh + 10;
						elge = eyh + enw - 10
					}
				} else if (name.length > 10) {
					ctx.save();
					ctx.translate(x, y);
					ctx.rotate(Math.PI / 180 * 90);
					ctx.textBaseline = 'bottom';
					var eyh, elgs, elge;
					fontPositionEnglish();
					fontOption(ctx, ['Linear', elgs, 0, elge, 0], fontLinearStyle, ['42px', 'Vani', [name, eyh, -8]], [1,
						"rgba(0,0,0,1)", [name, eyh, -8]
					], );
					log['material']['fontCutH'] = eyh + 270;

					function fontPositionEnglish() {
						ctx.font = '42px Vani';
						let enw = ctx.measureText(name).width;
						if (ctx.measureText(name).width < 110 && fsi == 'none') {
							eyh = 60
						} else if (ctx.measureText(name).width < 110 && fsi != 'none') {
							eyh = 10
						} else if (ctx.measureText(name).width >= 110 && fsi == 'none') {
							eyh = 165 - enw
						} else if (ctx.measureText(name).width >= 110 & fsi != 'none') {
							eyh = 130 - enw
						};
						elgs = eyh + 10;
						elge = eyh + enw - 10
					}
				};
			}
		} else if (!englishTest.test(name) && japaneseTest.test(name) && !numberTest.test(name) && !name.match('○')) {
			for (let i = 0; i < name.length; i++) {
				const str = name.slice(i, i + 1).toString();
				ctx.save();
				ctx.textBaseline = 'top';
				if (name.length == 1) {
					fontOption(ctx, ['Linear', 0, 283, 0, 338], fontLinearStyle, ['56px', 'A-OTF-RyuminPro-Heavy', [str, x, 283]], [1,
						"rgba(0,0,0,1)", [str, x, 283]
					], );
					if (i == 0) {
						log['material']['fontCutH'] = 283
					}
				} else if (name.length == 2) {
					fontOption(ctx, ['Linear', 0, 270, 0, 360], fontLinearStyle, ['56px', 'A-OTF-RyuminPro-Heavy', [str, x, y]], [1,
						"rgba(0,0,0,1)", [str, x, y]
					], );
					if (i == 0) {
						log['material']['fontCutH'] = y
					};
					y += ctx.measureText(str).width + letterSpacing
				} else if (name.length == 3 && fsi == 'none') {
					fontOption(ctx, ['Linear', 0, 286, 0, 396], fontLinearStyle, ['56px', 'A-OTF-RyuminPro-Heavy', [str, x, y]], [1,
						"rgba(0,0,0,1)", [str, x, y]
					], );
					if (i == 0) {
						log['material']['fontCutH'] = y
					};
					y += ctx.measureText(str).width + letterSpacing
				} else if (name.length <= 6) {
					letterSpacing = 32;
					x = 32;
					var jyh, jlgs, jlge;
					fontPositionJapanese();
					fontOption(ctx, ['Linear', 0, jlgs, 0, jlge], fontLinearStyle, ['46px', 'A-OTF-RyuminPro-Heavy', [str, x, jyh]], [
						1, "rgba(0,0,0,1)", [str, x, jyh]
					], );
					if (i == 0) {
						log['material']['fontCutH'] = jyh
					};
					y += ctx.measureText(str).width + letterSpacing;

					function fontPositionJapanese() {
						ctx.font = '46px A-OTF-RyuminPro-Heavy';
						let jnw = ctx.measureText(name).width - (name.length - 4) * 4;
						if (fsi == 'none') {
							jyh = y - (jnw - 180)
						} else if (fsi == 'kai' || fsi == 'kaini') {
							jyh = y - (jnw - 142)
						};
						if (i == 0) {
							jlgs = jyh + 30;
							jlge = jyh + name.length * 42 - 28
						}
					};
				}
			};
		} else if (!englishTest.test(name) && japaneseTest.test(name) && numberTest.test(name) && !name.match('○')) {
			for (let i = 0; i < name.length; i++) {
				const str = name.slice(i, i + 1).toString();
				if (japaneseTest.test(str) && !numberTest.test(str) && i == 0) {
					ctx.save();
					ctx.textBaseline = 'top';
					fontOption(ctx, ['Radial', 54, 287, 5, 54, 287, 25], fontRadialStyle, ['56px', 'A-OTF-RyuminPro-Heavy', [str, x, y]],
						[1, "rgba(0,0,0,1)", [str, x, y]], );
					if (i == 0) {
						log['material']['fontCutH'] = y
					};
					y += ctx.measureText(str).width + letterSpacing
				} else if (!japaneseTest.test(str) && numberTest.test(str) && i < 5) {
					ctx.save();
					ctx.textBaseline = 'top';
					if (name.length == 2) {
						let jn1x;
						jn1x = x + 15;
						fontOption(ctx, ['Radial', 54, 346, 5, 54, 346, 20], fontRadialStyle, ['60px', 'A-OTF-RyuminPro-Heavy', [str,
							jn1x, y
						]], [1, "rgba(0,0,0,1)", [str, jn1x, y]], );
						x += ctx.measureText(str).width + 24
					} else if (name.length == 3) {
						let jn2x;
						jn2x = x - 2;
						fontOption(ctx, ['Radial', 54, 346, 5, 54, 346, 20], fontRadialStyle, ['60px', 'A-OTF-RyuminPro-Heavy', [str,
							jn2x, y
						]], [1, "rgba(0,0,0,1)", [str, jn2x, y]], );
						x += ctx.measureText(str).width + 24
					} else if (name.length == 4) {
						let jn3x;
						jn3x = x - 5;
						let jn3y;
						jn3y = y + 5;
						fontOption(ctx, ['Radial', 54, 346, 5, 54, 346, 20], fontRadialStyle, ['46px', 'A-OTF-RyuminPro-Heavy', [str,
							jn3x, jn3y
						]], [1, "rgba(0,0,0,1)", [str, jn3x, jn3y]], );
						x += ctx.measureText(str).width + 15
					}
				};
			}
		} else if (englishTest.test(name) && !japaneseTest.test(name) && numberTest.test(name) && !name.match('○')) {
			const enstr2 = name.substr(1, 1);
			if (enstr2.match('-')) {
				for (let i = 0; i < name.length; i++) {
					const str = name.slice(i, i + 1).toString();
					if (englishTest.test(str) && !numberTest.test(str) && i == 0) {
						ctx.save();
						ctx.textBaseline = 'top';
						let enx;
						enx = x + 3;
						let eny;
						eny = y - 5;
						fontOption(ctx, ['Radial', 52, 282, 5, 52, 282, 25], fontRadialStyle, ['65px', 'Vani', [str, enx, eny]], [1,
							"rgba(0,0,0,1)", [str, enx, eny]
						], );
						if (i == 0) {
							log['material']['fontCutH'] = eny
						};
						y += ctx.measureText(str).width + letterSpacing
					} else if (i == 1) {
						if (fsi == 'none') {
							gOf = ctx.createRadialGradient(54, 324, 1, 54, 324, 10);
							gOf.addColorStop(0, '#fff');
							gOf.addColorStop(1, '#000')
						} else if (fsi == 'kai') {
							gOf = ctx.createRadialGradient(54, 324, 1, 54, 324, 10);
							gOf.addColorStop(0, '#ffe9a8');
							gOf.addColorStop(1, '#fdd76c')
						} else if (fsi == 'kaini') {
							gOf = ctx.createRadialGradient(54, 324, 1, 54, 324, 10);
							gOf.addColorStop(0, '#fceeb1');
							gOf.addColorStop(0.5, '#fac269');
							gOf.addColorStop(1, '#ffab51')
						};
						ctx.fillStyle = '#000';
						ctx.fillRect(50, 316, 8, 15);
						ctx.fillStyle = gOf;
						ctx.fillRect(51, 317, 6, 13)
					} else if (!englishTest.test(str) && numberTest.test(str) && i < 6 && i > 1) {
						ctx.save();
						ctx.textBaseline = 'top';
						if (name.length == 3) {
							let en1x;
							en1x = x + 15;
							fontOption(ctx, ['Radial', 54, 358, 5, 54, 358, 20], fontRadialStyle, ['60px', 'A-OTF-RyuminPro-Heavy', [str,
								en1x, y
							]], [1, "rgba(0,0,0,1)", [str, en1x, y]], );
							x += ctx.measureText(str).width + 24
						} else if (name.length == 4) {
							let en2x;
							en2x = x - 2;
							fontOption(ctx, ['Radial', 54, 358, 5, 54, 358, 20], fontRadialStyle, ['60px', 'A-OTF-RyuminPro-Heavy', [str,
								en2x, y
							]], [1, "rgba(0,0,0,1)", [str, en2x, y]], );
							x += ctx.measureText(str).width + 24
						} else if (name.length == 5) {
							let en3x;
							en3x = x - 5;
							let en3y;
							en3y = y + 20;
							fontOption(ctx, ['Radial', 54, 358, 5, 54, 358, 20], fontRadialStyle, ['46px', 'A-OTF-RyuminPro-Heavy', [str,
								en3x, en3y
							]], [1, "rgba(0,0,0,1)", [str, en3x, en3y]], );
							x += ctx.measureText(str).width + 15
						}
					};
				}
			} else {
				ctx.save();
				ctx.translate(x, y);
				ctx.rotate(Math.PI / 180 * 90);
				ctx.textBaseline = 'bottom';
				const ystr = name.substr(0, 1);
				fontOption(ctx, ['Radial', 40, -29, 5, 40, -29, 25], fontRadialStyle, ['60px', 'Vani', [ystr, 25, 5]], [1,
					"rgba(0,0,0,1)", [ystr, 25, 5]
				], );
				const ynstr = name.substr(1, 1);
				if (ynstr.match(/[12]/)) {
					ctx.save();
					ctx.rotate(Math.PI / 180 * 90);
					ctx.textBaseline = 'bottom';
					fontOption(ctx, ['Radial', 345, -54, 5, 345, -54, 23], fontRadialStyle, ['77px', 'Vani', [ynstr, 330, -17, 35]], [
						1, "rgba(0,0,0,1)", [ynstr, 330, -17, 35]
					], )
				} else if (ynstr.match(/[34579]/)) {
					ctx.save();
					ctx.rotate(Math.PI / 180 * 90);
					ctx.textBaseline = 'bottom';
					fontOption(ctx, ['Radial', 345, -54, 5, 345, -54, 23], fontRadialStyle, ['60px', 'Vani', [ynstr, 330, -32, 35]], [
						1, "rgba(0,0,0,1)", [ynstr, 330, -32, 35]
					], )
				} else if (ynstr.match(/[68]/)) {
					ctx.save();
					ctx.rotate(Math.PI / 180 * 90);
					ctx.textBaseline = 'bottom';
					fontOption(ctx, ['Radial', 345, -54, 5, 345, -54, 23], fontRadialStyle, ['60px', 'Vani', [ynstr, 330, -20, 35]], [
						1, "rgba(0,0,0,1)", [ynstr, 330, -20, 35]
					], )
				};
				log['material']['fontCutH'] = 259
			}
		} else if (!englishTest.test(name) && japaneseTest.test(name) && !numberTest.test(name) && name.match('○')) {
			console.log('圆形+假名');
			log['material']['fontCutH'] = 300;
			if (fsi == 'none') {
				gRound = ctx.createLinearGradient(0, 350, 0, 390);
				gRound.addColorStop(0, '#000');
				gRound.addColorStop(0.5, '#fff');
				gRound.addColorStop(1, '#000')
			} else if (fsi == 'kai') {
				gRound = ctx.createLinearGradient(0, 350, 0, 390);
				gRound.addColorStop(0, '#fdd76c');
				gRound.addColorStop(0.5, '#ffe9a8');
				gRound.addColorStop(1, '#fdd76c')
			} else if (fsi == 'kaini') {
				gRound = ctx.createLinearGradient(0, 350, 0, 390);
				gRound.addColorStop(0, '#ffab51');
				gRound.addColorStop(0.25, '#fac269');
				gRound.addColorStop(0.5, '#fceeb1');
				gRound.addColorStop(0.75, '#fac269');
				gRound.addColorStop(1, '#ffab51')
			};
			ctx.beginPath();
			ctx.arc(56, 365, 28, 0, Math.PI * 2, false);
			ctx.closePath();
			ctx.lineWidth = 5;
			ctx.strokeStyle = '#000';
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(56, 365, 28, 0, Math.PI * 2, false);
			ctx.closePath();
			ctx.lineWidth = 3;
			ctx.strokeStyle = gRound;
			ctx.stroke();
			const rstr = name.substr(1, 1);
			x = 32;
			ctx.save();
			ctx.textBaseline = 'top';
			fontOption(ctx, ['Linear', 0, 355, 0, 400], fontLinearStyle, ['50px', 'A-OTF-RyuminPro-Heavy', [rstr, x, 340]], [1,
				"rgba(0,0,0,1)", [rstr, x, 340]
			], )
		};
		ctx.shadowBlur = 0
	};

	function shipKanaFont(v) {
		let fsi = log['material']['fontStyle'];
		let fch = log['material']['fontCutH'];
		const ctx = cas.getContext("2d");
		let name = v;
		let x = 86;
		let y = 260;
		let letterSpacing = 24;
		const sntv = document.getElementById("shipNameText").value;
		if (englishTest.test(sntv) && !japaneseTest.test(sntv)) {
			if (log['material']['fontCutH'] < 256 && fsi == 'none') {
				y = log['material']['fontCutH']
			} else if (log['material']['fontCutH'] < 260 && fsi != 'none') {
				y = log['material']['fontCutH']
			} else if (log['material']['fontCutH'] > 270) {
				letterSpacing = 12;
				y = log['material']['fontCutH']
			} else if (numberTest.test(sntv)) {
				y = log['material']['fontCutH']
			} else {
				log['material']['fontCutH'] = 270
			}
		} else if (!englishTest.test(sntv) && japaneseTest.test(sntv)) {
			if (log['material']['fontCutH'] < 256 && fsi == 'none') {
				y = log['material']['fontCutH']
			} else if (log['material']['fontCutH'] < 260 && fsi != 'none') {
				y = log['material']['fontCutH']
			} else if (log['material']['fontCutH'] > 270 && sntv.match('○')) {
				letterSpacing = 12;
				y = log['material']['fontCutH'] = 300
			} else if (log['material']['fontCutH'] > 270 && sntv.length != 1 && !sntv.match('○')) {
				letterSpacing = 12;
				y = log['material']['fontCutH']
			} else if (log['material']['fontCutH'] > 270 && sntv.length == 1) {
				y = 275;
				log['material']['fontCutH'] = 270
			} else {
				log['material']['fontCutH'] = 270
			}
		} else {
			log['material']['fontCutH'] = 270
		};
		let fontLinearStyle, fontRadialStyle;
		if (fsi == 'none') {
			ctx.shadowBlur = 0;
			fontLinearStyle = [
				[0, '#fff'],
				[0.5, '#fff'],
				[1, '#fff']
			];
			fontRadialStyle = [
				[0, '#fff'],
				[1, '#fff']
			]
		} else if (fsi == 'kai') {
			ctx.shadowColor = "#fee69e";
			ctx.shadowOffsetX = 0;
			ctx.shadowOffsetY = 0;
			ctx.shadowBlur = 0;
			fontLinearStyle = [
				[0, '#fdd76c'],
				[0.5, '#ffe9a8'],
				[1, '#fdd76c']
			];
			fontRadialStyle = [
				[0, '#ffe9a8'],
				[1, '#fdd76c']
			]
		} else if (fsi == 'kaini') {
			ctx.shadowColor = "fff799";
			ctx.shadowOffsetX = 0;
			ctx.shadowOffsetY = 0;
			ctx.shadowBlur = 0;
			fontLinearStyle = [
				[0, '#ffab51'],
				[0.25, '#fac269'],
				[0.5, '#fceeb1'],
				[0.75, '#fac269'],
				[1, '#ffab51']
			];
			fontRadialStyle = [
				[0, '#fceeb1'],
				[0.5, '#fac269'],
				[1, '#ffab51']
			]
		};
		for (let i = 0; i < name.length; i++) {
			const str = name.slice(i, i + 1).toString();
			if (!englishTest.test(name) && !kanjiTest.test(name) && !numberTest.test(name) && kanaTest.test(name) && name.length <
				15) {
				ctx.save();
				ctx.textBaseline = 'top';
				var kyh, klgs, klge, fkh;
				let kny;
				kny = y;
				let knx;
				knx = x;
				if (englishTest.test(sntv) && !japaneseTest.test(sntv)) {
					if (name.length == 1) {
						kny = y + 45;
						letterSpacing = 0
					} else if (name.length >= 2 && name.length < 6) {
						if (name.length < 3) {
							kny = y + (50 / 2) - (16 / 2)
						} else if (name.length == 3) {
							kny = y + (15 / 2) - (16 / 2)
						} else if (name.length > 3) {
							kny = y + (10 / 2) - (16 / 2)
						};
						letterSpacing = ((3 * 43) - (name.length * 16)) / name.length
					} else if (name.length >= 6) {
						kny = y - 10;
						letterSpacing = 12
					}
				} else if (!englishTest.test(sntv) && japaneseTest.test(sntv) && !sntv.match('○') && sntv.length == 1) {
					letterSpacing = 16
				} else if (!englishTest.test(sntv) && japaneseTest.test(sntv) && sntv.match('○')) {
					letterSpacing = 16;
					fch = 315
				} else if (!englishTest.test(sntv) && japaneseTest.test(sntv) && !sntv.match('○') && sntv.length >= 2) {
					if (name.length == 1) {
						kny = y + 45;
						letterSpacing = 0
					} else if (name.length >= 2 && name.length < 6) {
						if (name.length < 3) {
							kny = y + (50 / 2) - (16 / 2)
						} else if (name.length == 3) {
							kny = y + (40 / 2) - (16 / 2)
						} else if (name.length > 3) {
							kny = y + (35 / 2) - (16 / 2)
						};
						letterSpacing = ((3 * 43) - (name.length * 16)) / name.length
					} else if (name.length >= 6) {
						kny = y + 4;
						letterSpacing = 12
					}
				};
				fontPositionJapanese();
				if (str == '.') {
					knx = knx + 6;
					kny = kny - 9
				};
				fontOption(ctx, ['Linear', 0, klgs, 0, klge], fontLinearStyle, ['16px', 'A-OTF-RyuminPro-Heavy', [str, knx, kny]],
					[0.65, "rgba(0,0,0,1)", [str, knx, kny]], );
				y += ctx.measureText(str).width + letterSpacing;

				function fontPositionJapanese() {
					ctx.font = '16px A-OTF-RyuminPro-Heavy';
					let knw = 0;
					if (i == 0) {
						if (name.length == 1) {
							knw = 6
						} else if (name.length == 2) {
							knw = 64
						} else if (name.length >= 3) {
							knw = (letterSpacing * (name.length - 1)) + ((name.length + 1) * 8)
						} else if (name.length >= 6) {
							knw = ctx.measureText(name).width + letterSpacing + 12 + (name.length - 6) * 8
						};
						klgs = kny + 10;
						klge = kny + knw;
						if (name.length >= 6) {
							if (englishTest.test(sntv) && !japaneseTest.test(sntv) && !numberTest.test(sntv)) {
								log['material']['fontKanaH'] = (kny - fch) + knw + 32 + (name.length - 6) * 2
							} else {
								log['material']['fontKanaH'] = (kny - fch) + knw + 22 + (name.length - 6) * 2
							}
						} else if (name.length < 6) {
							log['material']['fontKanaH'] = 120
						};
						fkh = kny + log['material']['fontKanaH']
					};
					if (fkh > 435) {
						letterSpacing = 8;
						if (i == 0) {
							knw = name.length * 16;
							klge = kny + knw;
							log['material']['fontKanaH'] = (kny - fch) + knw + 22
						};
						if (englishTest.test(sntv) && numberTest.test(sntv)) {
							kny = kny - 10;
							log['material']['fontKanaH'] = 165
						} else {
							kny = kny - 5
						}
					};
				}
			} else if (!englishTest.test(name) && !kanjiTest.test(name) && numberTest.test(name) && kanaTest.test(name) && name.length >
				1 && name.length < 15) {
				const knstr2 = name.substr(1, 1);
				if (numberTest.test(knstr2)) {
					if (!englishTest.test(str) && !kanjiTest.test(str) && !numberTest.test(str) && kanaTest.test(str) && i == 0) {
						ctx.save();
						ctx.textBaseline = 'top';
						let kny;
						kny = y + 20;
						let knx;
						knx = x;
						fontOption(ctx, ['Radial', 94, 287, 1, 94, 287, 10], fontRadialStyle, ['16px', 'A-OTF-RyuminPro-Heavy', [str, knx,
							kny
						]], [0.65, "rgba(0,0,0,1)", [str, knx, kny]], );
						y += ctx.measureText(str).width + letterSpacing
					} else if (!englishTest.test(str) && !kanjiTest.test(str) && numberTest.test(str) && !kanaTest.test(str) && name.length >
						1 && i > 0) {
						ctx.save();
						ctx.textBaseline = 'bottom';
						log['material']['fontKanaH'] = 120;
						if (name.length == 2) {
							let kn1x;
							kn1x = x + 3;
							fontOption(ctx, ['Radial', 94, 346, 1, 94, 346, 10], fontRadialStyle, ['16px', 'A-OTF-RyuminPro-Heavy', [str,
								kn1x, 355
							]], [0.65, "rgba(0,0,0,1)", [str, kn1x, 355]], );
							x += ctx.measureText(str).width + 2
						} else if (name.length == 3) {
							let kn2x;
							kn2x = x - 0;
							fontOption(ctx, ['Radial', 94, 346, 1, 94, 346, 10], fontRadialStyle, ['16px', 'A-OTF-RyuminPro-Heavy', [str,
								kn2x, 355
							]], [0.65, "rgba(0,0,0,1)", [str, kn2x, 355]], );
							x += ctx.measureText(str).width + 2
						} else if (name.length == 4) {
							let kn3x;
							kn3x = x - 2;
							fontOption(ctx, ['Radial', 94, 346, 1, 94, 346, 10], fontRadialStyle, ['14px', 'A-OTF-RyuminPro-Heavy', [str,
								kn3x, 355
							]], [0.65, "rgba(0,0,0,1)", [str, kn3x, 355]], );
							x += ctx.measureText(str).width + 1
						}
					};
				} else if (knstr2.match('-')) {
					if (!englishTest.test(str) && !kanjiTest.test(str) && !numberTest.test(str) && kanaTest.test(str) && i == 0) {
						ctx.save();
						ctx.textBaseline = 'top';
						let kny;
						kny = y + 20;
						let knx;
						knx = x;
						fontOption(ctx, ['Radial', 94, 287, 1, 94, 287, 10], fontRadialStyle, ['16px', 'A-OTF-RyuminPro-Heavy', [str, knx,
							kny
						]], [0.65, "rgba(0,0,0,1)", [str, knx, kny]], );
						y += ctx.measureText(str).width + letterSpacing
					} else if (i == 1) {
						if (fsi == 'none') {
							gOf = ctx.createRadialGradient(93, 318, 1, 93, 318, 10);
							gOf.addColorStop(0, '#fff');
							gOf.addColorStop(1, '#000')
						} else if (fsi == 'kai') {
							gOf = ctx.createRadialGradient(93, 319, 1, 93, 319, 10);
							gOf.addColorStop(0, '#ffe9a8');
							gOf.addColorStop(1, '#fdd76c')
						} else if (fsi == 'kaini') {
							gOf = ctx.createRadialGradient(93, 319, 1, 93, 319, 10);
							gOf.addColorStop(0, '#fceeb1');
							gOf.addColorStop(0.5, '#fac269');
							gOf.addColorStop(1, '#ffab51')
						};
						ctx.fillStyle = '#000';
						ctx.fillRect(92, 307, 4, 22);
						ctx.fillStyle = gOf;
						ctx.fillRect(92.5, 307.5, 3, 21)
					} else if (!englishTest.test(str) && !kanjiTest.test(str) && numberTest.test(str) && !kanaTest.test(str) && name.length >
						2 && i > 1) {
						ctx.save();
						ctx.textBaseline = 'bottom';
						log['material']['fontKanaH'] = 120;
						if (name.length == 3) {
							let kn1x;
							kn1x = x + 3;
							fontOption(ctx, ['Radial', 94, 346, 1, 94, 346, 10], fontRadialStyle, ['16px', 'A-OTF-RyuminPro-Heavy', [str,
								kn1x, 355
							]], [0.65, "rgba(0,0,0,1)", [str, kn1x, 355]], );
							x += ctx.measureText(str).width + 2
						} else if (name.length == 4) {
							let kn2x;
							kn2x = x - 0;
							fontOption(ctx, ['Radial', 94, 346, 1, 94, 346, 10], fontRadialStyle, ['16px', 'A-OTF-RyuminPro-Heavy', [str,
								kn2x, 355
							]], [0.65, "rgba(0,0,0,1)", [str, kn2x, 355]], );
							x += ctx.measureText(str).width + 2
						} else if (name.length == 5) {
							let kn3x;
							kn3x = x - 2;
							fontOption(ctx, ['Radial', 94, 346, 1, 94, 346, 10], fontRadialStyle, ['14px', 'A-OTF-RyuminPro-Heavy', [str,
								kn3x, 355
							]], [0.65, "rgba(0,0,0,1)", [str, kn3x, 355]], );
							x += ctx.measureText(str).width + 1
						}
					};
				} else {
					ctx.save();
					ctx.textBaseline = 'top';
					var kyh, klgs, klge, fkh;
					let kny;
					kny = y;
					let knx;
					knx = x;
					if (englishTest.test(sntv) && !japaneseTest.test(sntv)) {
						if (name.length == 1) {
							kny = y + 45;
							letterSpacing = 0
						} else if (name.length >= 2 && name.length < 6) {
							if (name.length < 3) {
								kny = y + (50 / 2) - (16 / 2)
							} else if (name.length == 3) {
								kny = y + (40 / 2) - (16 / 2)
							} else if (name.length > 3) {
								kny = y + (35 / 2) - (16 / 2)
							};
							letterSpacing = ((3 * 43) - (name.length * 16)) / name.length
						} else if (name.length >= 6) {
							kny = y + 4;
							letterSpacing = 12
						}
					} else if (!englishTest.test(sntv) && japaneseTest.test(sntv) && !sntv.match('○') && sntv.length == 1) {
						letterSpacing = 16
					} else if (!englishTest.test(sntv) && japaneseTest.test(sntv) && sntv.match('○')) {
						letterSpacing = 16;
						fch = 315
					} else if (!englishTest.test(sntv) && japaneseTest.test(sntv) && !sntv.match('○') && sntv.length >= 2) {
						if (name.length == 1) {
							kny = y + 45;
							letterSpacing = 0
						} else if (name.length >= 2 && name.length < 6) {
							if (name.length < 3) {
								kny = y + (50 / 2) - (16 / 2)
							} else if (name.length == 3) {
								kny = y + (40 / 2) - (16 / 2)
							} else if (name.length > 3) {
								kny = y + (35 / 2) - (16 / 2)
							};
							letterSpacing = ((3 * 43) - (name.length * 16)) / name.length
						} else if (name.length >= 6) {
							kny = y + 4;
							letterSpacing = 12
						}
					};
					if (numberTest.test(str)) {
						x = 90
					} else {
						x = 86
					};
					fontPositionJapanese();
					fontOption(ctx, ['Linear', 0, klgs, 0, klge], fontLinearStyle, ['16px', 'A-OTF-RyuminPro-Heavy', [str, knx, kny]],
						[0.65, "rgba(0,0,0,1)", [str, knx, kny]], );
					y += ctx.measureText(str).width + letterSpacing;

					function fontPositionJapanese() {
						ctx.font = '16px A-OTF-RyuminPro-Heavy';
						let knw = 0;
						if (i == 0) {
							if (name.length == 1) {
								knw = 6
							} else if (name.length == 2) {
								knw = 64
							} else if (name.length >= 3) {
								knw = (letterSpacing * (name.length - 1)) + ((name.length + 1) * 8)
							} else if (name.length >= 6) {
								knw = ctx.measureText(name).width + letterSpacing + 12 + (name.length - 6) * 8
							};
							klgs = kny + 10;
							klge = kny + knw;
							if (name.length >= 6) {
								log['material']['fontKanaH'] = (kny - fch) + knw + 22 + (name.length - 6) * 2
							} else if (name.length < 6) {
								log['material']['fontKanaH'] = 120
							};
							fkh = kny + log['material']['fontKanaH']
						};
						if (fkh > 435) {
							letterSpacing = 8;
							if (i == 0) {
								knw = name.length * 16;
								klge = kny + knw;
								log['material']['fontKanaH'] = (kny - fch) + knw + 18
							};
							kny = kny - 5
						}
					};
				}
			};
		};
		ctx.shadowBlur = 0
	};

	function fontOption() {
		let args = arguments;
		if (args[1] == false) {
			args[0].fillStyle = args[2]
		} else if (args[1][0] == 'Linear') {
			gradient = args[0].createLinearGradient(args[1][1], args[1][2], args[1][3], args[1][4]);
			for (i = 0; i < args[2].length; i++) {
				gradient.addColorStop(args[2][i][0], args[2][i][1])
			};
			args[0].fillStyle = gradient
		} else if (args[1][0] == 'Radial') {
			gradient = args[0].createRadialGradient(args[1][1], args[1][2], args[1][3], args[1][4], args[1][5], args[1][6]);
			for (i = 0; i < args[2].length; i++) {
				gradient.addColorStop(args[2][i][0], args[2][i][1])
			};
			args[0].fillStyle = gradient
		};
		args[0].font = args[3][0] + ' ' + args[3][1];
		if (!args[3][2][3]) {
			args[3][2][3] = undefined
		};
		args[0].fillText(args[3][2][0], args[3][2][1], args[3][2][2], args[3][2][3]);
		args[0].lineWidth = args[4][0];
		args[0].strokeStyle = args[4][1];
		if (!args[4][2][3]) {
			args[4][2][3] = undefined
		};
		args[0].strokeText(args[4][2][0], args[4][2][1], args[4][2][2], args[4][2][3]);
		args[0].restore()
	};
	rect[page].rectFont = function() {
		const snt = document.getElementById("shipNameText");
		const skt = document.getElementById("shipKanaText");
		shipNameFont(snt.value);
		shipKanaFont(skt.value);
		log['font']['shipName'] = snt.value;
		log['font']['shipKana'] = skt.value
	};
	rect[page].rectCanvas = function() {
		dom.cri.value = dom.cvi.value = parseFloat(log[page][log[page].state].size);
		dom.rri.value = dom.rvi.value = parseFloat(log[page][log[page].state].angle);
		ctx.drawImage(imgFontLogo, 0, 0, imgFontLogo.width, imgFontLogo.height);
		ctx.clearRect(0, 0, cas.width, cas.height);
		ctx.drawImage(imgRare, 0, 0, imgRare.width, imgRare.height);
		ctx.drawImage(imgBgBorderUp, bbux, 0, imgBgBorderUp.width, imgBgBorderUp.height);
		ctx.drawImage(imgShipTypeBg, stbx, 0, imgShipTypeBg.width, imgShipTypeBg.height);
		ctx.drawImage(imgBorderDown, 0, 0, imgBorderDown.width, imgBorderDown.height);
		ctx.save();
		log[page][log[page].state].wHalf = log[page][log[page].state].x + (parseInt(log[page][log[page].state].w) / 2);
		log[page][log[page].state].hHalf = log[page][log[page].state].y + (parseInt(log[page][log[page].state].h) / 2);
		ctx.translate(log[page][log[page].state].wHalf, log[page][log[page].state].hHalf);
		ctx.rotate(log[page][log[page].state].angle * Math.PI / 180);
		ctx.translate(-log[page][log[page].state].wHalf, -log[page][log[page].state].hHalf);
		ctx.drawImage(img, log[page][log[page].state].x, log[page][log[page].state].y, log[page][log[page].state].w, log[
			page][log[page].state].h);
		ctx.restore();
		ctx.drawImage(imgBorderUp, 0, 0, imgBorderUp.width, imgBorderUp.height);
		ctx.drawImage(imgFall, 0, 0, imgFall.width, imgFall.height);
		ctx.drawImage(imgTexture, 0, 0, imgTexture.width, imgTexture.height);
		ctx.drawImage(imgBadge, 0, 0, imgBadge.width, imgBadge.height);
		ctx.drawImage(imgShipType, 0, 0, imgShipType.width, imgShipType.height);
		fontBgImg();
		ctx.drawImage(imgFontLogo, 0, 0, imgFontLogo.width, imgFontLogo.height);
		ctx.drawImage(imgBorder, 0, 0, imgBorder.width, imgBorder.height)
	};
	rect[page].rectImg = function() {
		rect[page].rectCanvas();
		rect[page].rectFont()
	};
	controlMove(cas, ctx, page, dom);
	controlSize(cas, page, dom, img);
	controlState(page, dom, img);
	var imgUrl;

	function saveImg(a, b) {
		imgUrl = cas.toDataURL({
			format: 'image/png',
			quality: 1
		});
		showOperation(a);
		if (page == 'card') {
			if (log[page].state == 'normal') {
				imgData[imgData.level][page] = imgUrl
			} else if (log[page].state == 'damage') {
				imgData[imgData.level][page + '_dmg'] = imgUrl
			}
		};
	};

	function showOperation(a) {
		createCanvas(a, "Show");
		const casS = document.getElementById(a + "ShowCanvas");
		const ctxS = casS.getContext("2d");
		var imgS = new Image();
		imgS.src = imgUrl;
		imgS.onload = function() {
			ctxS.drawImage(imgS, 0, 0, imgS.width, imgS.height)
		};
		casS.oncontextmenu = function(e) {
			e.preventDefault();
			delExportDiv(a + 'ShowDiv')
		}
	};

	function createCanvas(a, b) {
		const dcw = window.innerWidth;
		const dch = window.innerHeight;
		createElement({
			'dom': 'div',
			'appendDom': 'body',
			'id': a + 'ShowDiv',
			'className': ['export_div'],
			'style': {
				'width': dcw + 'px',
				'height': dch + 'px',
			},
			'setAttribute': {
				'onclick': 'delExportDiv("' + a + 'ShowDiv")'
			}
		});
		createElement({
			'dom': 'canvas',
			'appendId': [a + 'ShowDiv'],
			'id': a + b + 'Canvas',
			'className': [a + '-middle-canvas', 'middle-canvas'],
			'style': {
				'marginTop': (dch - casH) / 2 + 'px'
			},
			'setAttribute': {
				'width': casW + 'px',
				'height': casH + 'px'
			},
		});
		createElement({
			'dom': 'p',
			'appendId': [a + b + 'Canvas'],
			'className': ['canvas-error-text-p'],
			'innerHTML': canvasErrorText[0] + canvasErrorText[1] +
				"<a href='https://www.google.cn/intl/zh-CN/chrome/'>GoogleChrome</a>"
		})
	};

	function downLoadImg(a) {
		var urlData = {};
		if (a == 'Normal') {
			urlData[page] = imgUrl
		} else if (a == 'Damage') {
			urlData[page + '_dmg'] = imgUrl
		};
		for (i in urlData) {
			const element = document.createElement("a");
			element.download = i;
			element.href = urlData[i];
			document.body.appendChild(element);
			element.click();
			element.remove()
		}
	};
	! function() {
		document.getElementById("fontStyleNone").onclick = function() {
			fontStyleCheck(this.value);
			inputClick("fontlogo", this.value)
		};
		document.getElementById("fontStyleKai").onclick = function() {
			fontStyleCheck(this.value);
			inputClick("fontlogo", this.value)
		};
		document.getElementById("fontStyleKaini").onclick = function() {
			fontStyleCheck(this.value);
			inputClick("fontlogo", this.value)
		};
		document.getElementById("shipNameText").oninput = function() {
			fontCheck(this);
			inputClick('fontlogo', log['material']['fontStyle'])
		};
		document.getElementById("shipKanaText").oninput = function() {
			fontCheck(this);
			inputClick('fontlogo', log['material']['fontStyle'])
		};
		if (document.getElementById("saveNormal")) {
			document.getElementById("saveNormal").onclick = function() {
				saveImg(page, 'Normal')
			}
		};
		if (document.getElementById("saveDamage")) {
			document.getElementById("saveDamage").onclick = function() {
				saveImg(page, 'Damage')
			}
		};
		if (document.getElementById("downloadNormal")) {
			document.getElementById("downloadNormal").onclick = function() {
				downLoadImg('Normal')
			}
		};
		if (document.getElementById("downloadDamage")) {
			document.getElementById("downloadDamage").onclick = function() {
				downLoadImg('Damage')
			}
		};
		var levelSelect = document.getElementsByName('level');
		for (i = 0; i < levelSelect.length; i++) {
			document.getElementsByName('level')[i].onclick = function() {
				imgData.level = this.id;
				if (page == 'card') {
					if (imgDataN != undefined && imgData[imgData.level].full == undefined) {
						switchPageFun('full');
						return
					} else if (imgDataD != undefined && imgData[imgData.level].full_dmg == undefined) {
						switchPageFun('full');
						return
					}
				};
				if (imgDataN != undefined) {
					log[page].state = 'normal';
					if (imgDataD != undefined) {
						document.getElementById('state_damage').checked = false
					};
					document.getElementById('state_normal').checked = true;
					if (dom.nsi) {
						dom.nsi.style.display = 'inline-block'
					};
					if (dom.ndi) {
						dom.ndi.style.display = 'inline-block'
					};
					if (dom.dsi) {
						dom.dsi.style.display = 'none'
					};
					if (dom.ddi) {
						dom.ddi.style.display = 'none'
					}
				};
				if (page == 'card') {
					if (log[page].state == 'normal') {
						img.src = imgDataN = imgData[imgData.level].orgN
					} else if (log[page].state == 'damage') {
						img.src = imgDataD = imgData[imgData.level].orgD
					}
				};
				rect[page].rectImg()
			}
		};
	}();
	! function() {
		if (imgDataN != undefined) {
			img.src = imgDataN;
			log[page].state = 'normal';
			document.getElementById('state_normal').checked = true;
			if (dom.nsi) {
				dom.nsi.style.display = 'inline-block'
			};
			if (dom.ndi) {
				dom.ndi.style.display = 'inline-block'
			};
			if (dom.dsi) {
				dom.dsi.style.display = 'none'
			};
			if (dom.ddi) {
				dom.ddi.style.display = 'none'
			};
			stateVal = '_n'
		} else if (imgDataN == undefined && imgDataD != undefined) {
			img.src = imgDataD;
			log[page].state = 'damage';
			document.getElementById('state_damage').checked = true;
			if (dom.dsi) {
				dom.dsi.style.display = 'inline-block'
			};
			if (dom.ddi) {
				dom.ddi.style.display = 'inline-block'
			};
			if (dom.nsi) {
				dom.nsi.style.display = 'none'
			};
			if (dom.ndi) {
				dom.ndi.style.display = 'none'
			};
			stateVal = '_d'
		};
		if (log['material']['fontStyle'] == 'none') {
			imgFontLogo.src = "./img/card/none.png";
			document.getElementById('kai').style.display = 'none';
			document.getElementById('kaini').style.display = 'none';
			document.getElementById('fontStyleNone').checked = true
		} else if (log['material']['fontStyle'] == 'kai') {
			imgFontLogo.src = "./img/card/font_logo/" + log['material']['fontLogo']['size'] + "/kai.png";
			document.getElementById('kai').style.display = 'block';
			document.getElementById('kaini').style.display = 'none';
			document.getElementById('fontStyleKai').checked = true
		} else if (log['material']['fontStyle'] == 'kaini') {
			imgFontLogo.src = "./img/card/font_logo/" + log['material']['fontLogo']['size'] + "/kaini.png";
			document.getElementById('kai').style.display = 'none';
			document.getElementById('kaini').style.display = 'block';
			document.getElementById('fontStyleKaini').checked = true
		};
		for (i in material) {
			let str = imgStrSub(i);
			if (i == 'texture') {
				if (log['material'][i] == 0) {
					window[str].src = local + '/' + page + '/none.png';
					document.getElementById(i).value = textVal.material[i][log['material'][i]]
				} else {
					window[str].src = local + '/' + page + '/' + i + '/' + material[i][log['material'][i]] + '_' + material[
						'texturePosition'][log['material']['texturePosition']] + '.png';
					document.getElementById(i).value = textVal.material[i][log['material'][i]] + textVal.material['texturePosition'][
						log['material']['texturePosition']
					]
				}
			} else if (i == 'shipType') {
				window[str].src = local + '/' + page + '/ship_type/' + material[i][log['material']['shipType']] + '.png';
				document.getElementById(i).value = textVal.material[i][log['material'][i]]
			} else if (i == 'shipTypeBg') {
				window[str].src = local + '/' + page + '/ship_type_bg/' + material['shipType'][log['material']['shipType']] +
					'.png'
			} else if (i != 'texturePosition' && i != 'fontLogo' && i != 'bgBorderDown' && i != 'bgBorderUp' && i !=
				'borderDown' && i != 'borderUp' && i != 'border') {
				if (i == 'fall' && log['material'][i] == 0) {
					window[str].src = local + '/' + page + '/none.png'
				} else {
					window[str].src = local + '/' + page + '/' + i + '/' + material[i][log['material'][i]] + '.png';
					document.getElementById(i).value = textVal.material[i][log['material'][i]]
				}
			};
		};
		imgBgBorderUp.src = local + '/' + page + '/border/bg_border_up.png';
		imgBorderDown.src = local + '/' + page + '/border/border_down.png';
		imgBorderUp.src = local + '/' + page + '/border/border_up.png';
		imgBorder.src = local + '/' + page + '/border/front_border.png';
		rect[page].rectImg()
	}()
};

function canvasBannerPage(page, lang, local) {
	var imgDataN = imgData[imgData.level].full;
	var imgDataD = imgData[imgData.level].full_dmg;
	createElement({
		'dom': 'div',
		'appendId': ['content'],
		'id': page + 'Page',
		'className': [page + '-page-div']
	});
	createElement({
		'dom': 'h1',
		'appendId': [page + 'Page'],
		'className': [page + '-page-text-title', 'page-text-title'],
		'innerHTML': pageTitleText[2]
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'LeftDiv',
		'className': [page + '-left-div', 'left-div']
	});
	createElement({
		'dom': 'h2',
		'appendId': [page + 'LeftDiv'],
		'innerHTML': pageSettingText[0]
	});
	for (i in material) {
		let id = i;
		if (id != null && id != undefined && id != 'texturePosition' && id != 'fontLogo' && id != 'shipTypeBg' && id !=
			'bgBorderDown' && id != 'bgBorderUp' && id != 'borderDown' && id != 'borderUp' && id != 'border') {
			createElement({
				'dom': 'h3',
				'appendId': [page + 'LeftDiv'],
				'innerHTML': materialText[i]
			});
			createSelectElement(page, id, lang, page + 'LeftDiv')
		}
	};
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'MiddleDiv',
		'className': [page + '-middle-div', 'middle-div']
	});
	createElement({
		'dom': 'canvas',
		'appendId': [page + 'MiddleDiv'],
		'id': page + 'Canvas',
		'className': [page + '-middle-canvas', 'middle-canvas']
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'Canvas'],
		'className': ['canvas-error-text-p'],
		'innerHTML': canvasErrorText[0] + canvasErrorText[1] +
			"<a href='https://www.google.cn/intl/zh-CN/chrome/'>GoogleChrome</a>"
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'RightDiv',
		'className': [page + '-right-div', 'right-div']
	});
	createElement({
		'dom': 'h2',
		'appendId': [page + 'RightDiv'],
		'innerHTML': pageSettingText[1]
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[0]
	});
	if (imgDataN != undefined) {
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'state_normal',
			'className': ['state-normal-input'],
			'name': 'state',
			'type': 'radio',
			'value': 'normal',
		});
		createElement({
			'dom': 'span',
			'appendId': [page + 'RightDiv'],
			'innerHTML': settingRightText[1]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		});
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'saveNormal',
			'className': ['save-input'],
			'type': 'button',
			'value': settingRightText[11]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		})
	};
	if (imgDataD != undefined) {
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'state_damage',
			'className': ['state-damage-input'],
			'name': 'state',
			'type': 'radio',
			'value': 'damage',
		});
		createElement({
			'dom': 'span',
			'appendId': [page + 'RightDiv'],
			'innerHTML': settingRightText[2]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		});
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'saveDamage',
			'className': ['save-input'],
			'type': 'button',
			'value': settingRightText[11]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		})
	};
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[18]
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[19] + ':'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'plvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[20] + ':'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'ptvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[3]
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-min'],
		'innerHTML': '0'
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-max'],
		'innerHTML': '100'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'cri',
		'type': 'range',
		'value': '100',
		'setAttribute': {
			'min': '0',
			'max': '100'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'cvi',
		'type': 'number',
		'value': '100',
		'setAttribute': {
			'min': '0',
			'max': '100',
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[4]
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-min'],
		'innerHTML': '-180°'
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-max'],
		'innerHTML': '180°'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'rri',
		'type': 'range',
		'value': '0',
		'setAttribute': {
			'min': '-180',
			'max': '180'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'rvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'min': '-180',
			'max': '180',
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	const cas = document.getElementById(page + "Canvas");
	const ctx = cas.getContext("2d");
	const casW = 327;
	const casH = 450;
	cas.setAttribute('width', casW);
	cas.setAttribute('height', casH);
	const canvasDiv = document.getElementById(page + "MiddleDiv");
	canvasDiv.style.width = casW + 2 + 'px';
	const leftWidth = 800 - (casW / 2 + 200);
	document.getElementById(page + "LeftDiv").style.marginLeft = leftWidth + 'px';
	var state = 'normal';
	var x = 0;
	var y = 0;
	var dom = {};
	dom.nsi = document.getElementById("saveNormal");
	dom.dsi = document.getElementById("saveDamage");
	dom.ndi = document.getElementById("downloadNormal");
	dom.ddi = document.getElementById("downloadDamage");
	dom.plvi = document.getElementById("plvi");
	dom.ptvi = document.getElementById("ptvi");
	dom.cri = document.getElementById("cri");
	dom.cvi = document.getElementById("cvi");
	dom.rri = document.getElementById("rri");
	dom.rvi = document.getElementById("rvi");
	var img = new Image();
	img.onload = function() {
		log[page][log[page].state].w = img.width * (log[page][log[page].state].size * 0.01);
		log[page][log[page].state].h = img.height * (log[page][log[page].state].size * 0.01);
		rect[page].rectImg()
	};
	! function() {
		for (i in material) {
			if (i != null && i != undefined && i != 'texturePosition' && i != 'fontLogo' && i != 'shipTypeBg' && i !=
				'bgBorderDown' && i != 'bgBorderUp' && i != 'Border') {
				let str = imgStrSub(i);
				window[str] = new Image();
				window[str].onload = function() {
					rect[page].rectImg()
				}
			};
		}
	}();
	! function() {
		let selectDom = document.getElementsByClassName('left-select');
		for (i = 0; i < selectDom.length; i++) {
			document.getElementById(selectDom[i].id).onchange = function() {
				let name = material[this.id][this.selectedIndex];
				let id = this.id;
				materialSwitch(id, name)
			}
		};
	}();

	function materialSwitch(a, b) {
		let str = imgStrSub(a);
		if (b == 'none') {
			window[str].src = "./img/banner/" + b + ".png";
			log['material'][a] = 0
		} else if (a == 'shipType') {
			imgShipType.src = "./img/banner/ship_type/" + b + ".png";
			log['material'][a] = getNumber(a, b)
		} else {
			window[str].src = "./img/banner/" + a + "/" + b + ".png";
			log['material'][a] = getNumber(a, b)
		};

		function getNumber(k, v) {
			for (j = 0; j < material[k].length; j++) {
				if (material[k][j] == v) {
					return j
				}
			};
		}
	};

	function imgStrSub(a) {
		let strA = a;
		let strB = strA.substring(1);
		strA = strA.substring(0, 1);
		strA = strA.toUpperCase();
		let str = 'img' + strA + strB;
		return str
	};
	var sw = 240;
	var sh = 60;
	var iX = cas.width / 2 - sw / 2;
	var iY = cas.height / 2 - sh / 2;

	function borderRed() {
		let b = 1;
		ctx.beginPath();
		ctx.fillStyle = "#ff0000";
		ctx.rect(iX, iY - b, sw, b);
		ctx.rect(iX, iY + sh, sw, b);
		ctx.rect(iX - b, iY - b, b, sh + b * 2);
		ctx.rect(iX + sw, iY - b, b, sh + b * 2);
		ctx.fill();
		ctx.closePath()
	};
	rect[page].coverWhite = function() {
		ctx.beginPath();
		ctx.fillStyle = "#fff";
		ctx.rect(0, 0, casW, iY);
		ctx.rect(0, iY + sh, casW, iY);
		ctx.rect(0, iY, iX, sh);
		ctx.rect(iX + sw, iY, iX, sh);
		ctx.fill();
		ctx.closePath();
		borderRed()
	};
	rect[page].rectCanvas = function() {
		dom.cri.value = dom.cvi.value = parseFloat(log[page][log[page].state].size);
		dom.rri.value = dom.rvi.value = parseFloat(log[page][log[page].state].angle);
		log[page][log[page].state].x = log[page][log[page].state].x;
		log[page][log[page].state].y = log[page][log[page].state].y;
		log[page][log[page].state].angle = log[page][log[page].state].angle;
		log[page][log[page].state].size = log[page][log[page].state].size;
		ctx.clearRect(iX, iY, sw, sh);
		ctx.drawImage(imgRare, iX, iY, imgRare.width, imgRare.height);
		ctx.drawImage(imgBorderDown, iX, iY, imgBorderDown.width, imgBorderDown.height);
		ctx.save();
		log[page][log[page].state].wHalf = log[page][log[page].state].x + (parseInt(log[page][log[page].state].w) / 2);
		log[page][log[page].state].hHalf = log[page][log[page].state].y + (parseInt(log[page][log[page].state].h) / 2);
		ctx.translate(log[page][log[page].state].wHalf, log[page][log[page].state].hHalf);
		ctx.rotate(log[page][log[page].state].angle * Math.PI / 180);
		ctx.translate(-log[page][log[page].state].wHalf, -log[page][log[page].state].hHalf);
		ctx.drawImage(img, log[page][log[page].state].x, log[page][log[page].state].y, log[page][log[page].state].w, log[
			page][log[page].state].h);
		ctx.restore();
		ctx.drawImage(imgBorderUp, iX, iY, imgBorderUp.width, imgBorderUp.height);
		ctx.drawImage(imgFall, iX, iY, imgFall.width, imgFall.height);
		ctx.drawImage(imgTexture, iX, iY, imgTexture.width, imgTexture.height);
		ctx.drawImage(imgBadge, iX, iY, imgBadge.width, imgBadge.height);
		ctx.drawImage(imgShipType, iX, iY, imgShipType.width, imgShipType.height)
	};
	rect[page].rectImg = function() {
		rect[page].rectCanvas();
		rect[page].coverWhite()
	};
	controlMove(cas, ctx, page, dom);
	controlSize(cas, page, dom, img);
	controlState(page, dom, img);
	var imgUrl, imgUrlF, imgUrlG, imgUrlGF;

	function saveImg(a, b) {
		cas.setAttribute('width', sw);
		cas.setAttribute('height', sh);
		var oX = iX;
		var oY = iY;
		iX = 0;
		iY = 0;
		log[page][log[page].state].x = log[page][log[page].state].x - oX;
		log[page][log[page].state].y = log[page][log[page].state].y - oY;
		rect[page].rectImg();
		imgUrl = cas.toDataURL({
			format: 'image/png',
			quality: 1
		});
		cas.setAttribute('width', casW);
		cas.setAttribute('height', casH);
		iX = oX;
		iY = oY;
		log[page][log[page].state].x = log[page][log[page].state].x + oX;
		log[page][log[page].state].y = log[page][log[page].state].y + oY;
		rect[page].rectImg();
		const dcw = window.innerWidth;
		const dch = window.innerHeight;
		createElement({
			'dom': 'div',
			'appendDom': 'body',
			'id': a + 'ShowDiv',
			'className': ['export_div'],
			'style': {
				'width': dcw + 'px',
				'height': dch + 'px',
			},
			'setAttribute': {
				'onclick': 'delExportDiv("' + a + 'ShowDiv")'
			}
		});
		showOperation(a);
		featherOperation(a, 'F');
		if (b == 'Damage') {
			grayOperation(a)
		}
	};

	function showOperation(a) {
		createCanvas(a, "Show");
		const casS = document.getElementById(a + "ShowCanvas");
		const ctxS = casS.getContext("2d");
		var imgS = new Image();
		imgS.src = imgUrl;
		imgS.onload = function() {
			ctxS.drawImage(imgS, 0, 0, imgS.width, imgS.height)
		};
		casS.oncontextmenu = function(e) {
			e.preventDefault();
			delExportDiv(a + 'ShowDiv')
		}
	};

	function grayOperation(a) {
		createCanvas(a, "Gray");
		const casG = document.getElementById(a + "GrayCanvas");
		const ctxG = casG.getContext("2d");
		var imgG = new Image();
		imgG.src = imgUrl;
		imgG.onload = function() {
			ctxG.drawImage(imgG, 0, 0, imgG.width, imgG.height);
			var imageDatas = ctxG.getImageData(0, 0, imgG.width, imgG.height);
			var dataArray = imageDatas.data;
			for (var i = 0; i < dataArray.length; i += 4) {
				var r = dataArray[i];
				var g = dataArray[i + 1];
				var b = dataArray[i + 2];
				var result = parseInt((r + g + b) / 3);
				dataArray[i] = result;
				dataArray[i + 1] = result;
				dataArray[i + 2] = result
			};
			ctxG.putImageData(imageDatas, 0, 0);
			imgUrlG = casG.toDataURL({
				format: 'image/png',
				quality: 1
			});
			featherOperation(a, 'G')
		};
		casG.oncontextmenu = function(e) {
			e.preventDefault();
			delExportDiv(a + 'ShowDiv')
		}
	};

	function featherOperation(a, b) {
		createCanvas(a, "Feather" + b);
		var feather = {};
		feather['cas' + b] = document.getElementById(a + "Feather" + b + "Canvas");
		feather['ctx' + b] = feather['cas' + b].getContext("2d");
		var imgF = new Image();
		if (b == 'F') {
			imgF.src = imgUrl
		} else if (b == 'G') {
			imgF.src = imgUrlG
		};
		imgF.onload = function() {
			let ih = feather['cas' + b].height;
			let iw = feather['cas' + b].width;
			feather['ctx' + b].clearRect(0, 0, feather['cas' + b].width, feather['cas' + b].height);
			feather['ctx' + b].globalCompositeOperation = "source-over";
			feather['ctx' + b].drawImage(imgF, 0, 0, imgF.width, imgF.height);
			feather['ctx' + b].save();
			feather['ctx' + b].globalCompositeOperation = "destination-out";
			addFrameMask(feather['ctx' + b], 0, 0, iw, ih, 255);
			feather['ctx' + b].restore();
			if (b == 'F') {
				imgUrlF = feather['cas' + b].toDataURL({
					format: 'image/png',
					quality: 1
				});
				if (log[page].state == 'normal') {
					imgData[imgData.level][page] = imgUrl;
					imgData[imgData.level][page + '2'] = imgUrlF
				}
			} else if (b == 'G') {
				imgUrlGF = feather['cas' + b].toDataURL({
					format: 'image/png',
					quality: 1
				});
				if (page == 'banner') {
					if (log[page].state == 'damage') {
						imgData[imgData.level][page + '_dmg'] = imgUrl;
						imgData[imgData.level][page + '_g_dmg'] = imgUrlG;
						imgData[imgData.level][page + '2_dmg'] = imgUrlF;
						imgData[imgData.level][page + '2_g_dmg'] = imgUrlGF
					}
				};
			}
		};
		feather['cas' + b].oncontextmenu = function(e) {
			e.preventDefault();
			delExportDiv(a + 'ShowDiv')
		}
	};

	function addFrameMask(ctxF, x, y, w, h, color) {
		let style;
		style = setLinearStyle(ctxF, w, y, x, y, color);
		ctxF.fillStyle = style;
		ctxF.fillRect(x, y, w, h)
	};

	function setLinearStyle(ctxF, x1, y1, x2, y2, color) {
		let tmp = ctxF.createLinearGradient(x1, y1, x2, y2);
		tmp.addColorStop(0, 'rgba(' + color + ',' + color + ',' + color + ', 0)');
		tmp.addColorStop(0.55, 'rgba(' + color + ',' + color + ',' + color + ', 0)');
		tmp.addColorStop(0.7, 'rgba(' + color + ',' + color + ',' + color + ', 1)');
		tmp.addColorStop(1, 'rgba(' + color + ',' + color + ',' + color + ', 1)');
		return tmp
	};

	function createCanvas(a, b) {
		const dcw = window.innerWidth;
		const dch = window.innerHeight;
		createElement({
			'dom': 'canvas',
			'appendId': [a + 'ShowDiv'],
			'id': a + b + 'Canvas',
			'className': [a + '-middle-canvas', 'middle-canvas'],
			'style': {
				'marginTop': (dch - sh) / 2 + 'px',
				'marginLeft': '20px'
			},
			'setAttribute': {
				'width': sw + 'px',
				'height': sh + 'px'
			}
		});
		createElement({
			'dom': 'p',
			'appendId': [a + b + 'Canvas'],
			'className': ['canvas-error-text-p'],
			'innerHTML': canvasErrorText[0] + canvasErrorText[1] +
				"<a href='https://www.google.cn/intl/zh-CN/chrome/'>GoogleChrome</a>"
		})
	};

	function downLoadImg(a) {
		var urlData = {};
		if (a == 'Normal') {
			urlData[page] = imgUrl;
			urlData[page + '2'] = imgUrl
		} else if (a == 'Damage') {
			urlData[page + '_dmg'] = imgUrl;
			urlData[page + '2_dmg'] = imgUrlF;
			urlData[page + '_g_dmg'] = imgUrlG;
			urlData[page + '2_g_dmg'] = imgUrlGF
		};
		for (i in urlData) {
			const element = document.createElement("a");
			element.download = i;
			element.href = urlData[i];
			document.body.appendChild(element);
			element.click();
			element.remove()
		}
	};
	! function() {
		if (document.getElementById("saveNormal")) {
			document.getElementById("saveNormal").onclick = function() {
				saveImg(page, 'Normal')
			}
		};
		if (document.getElementById("saveDamage")) {
			document.getElementById("saveDamage").onclick = function() {
				saveImg(page, 'Damage')
			}
		};
		if (document.getElementById("downloadNormal")) {
			document.getElementById("downloadNormal").onclick = function() {
				downLoadImg('Normal')
			}
		};
		if (document.getElementById("downloadDamage")) {
			document.getElementById("downloadDamage").onclick = function() {
				downLoadImg('Damage')
			}
		};
		var levelSelect = document.getElementsByName('level');
		for (i = 0; i < levelSelect.length; i++) {
			document.getElementsByName('level')[i].onclick = function() {
				imgData.level = this.id;
				if (page == 'banner') {
					if (imgDataN != undefined && imgData[imgData.level].full == undefined) {
						switchPageFun('full');
						return
					} else if (imgDataD != undefined && imgData[imgData.level].full_dmg == undefined) {
						switchPageFun('full');
						return
					}
				};
				if (imgDataN != undefined) {
					log[page].state = 'normal';
					if (imgDataD != undefined) {
						document.getElementById('state_damage').checked = false
					};
					document.getElementById('state_normal').checked = true;
					if (dom.nsi) {
						dom.nsi.style.display = 'inline-block'
					};
					if (dom.ndi) {
						dom.ndi.style.display = 'inline-block'
					};
					if (dom.dsi) {
						dom.dsi.style.display = 'none'
					};
					if (dom.ddi) {
						dom.ddi.style.display = 'none'
					}
				};
				if (page == 'banner') {
					if (log[page].state == 'normal') {
						img.src = imgDataN = imgData[imgData.level].orgN
					} else if (log[page].state == 'damage') {
						img.src = imgDataD = imgData[imgData.level].orgD
					}
				};
				rect[page].rectImg()
			}
		};
	}();
	! function() {
		if (imgDataN != undefined) {
			img.src = imgDataN;
			log[page].state = 'normal';
			document.getElementById('state_normal').checked = true;
			if (dom.nsi) {
				dom.nsi.style.display = 'inline-block'
			};
			if (dom.ndi) {
				dom.ndi.style.display = 'inline-block'
			};
			if (dom.dsi) {
				dom.dsi.style.display = 'none'
			};
			if (dom.ddi) {
				dom.ddi.style.display = 'none'
			};
			stateVal = '_n'
		} else if (imgDataN == undefined && imgDataD != undefined) {
			img.src = imgDataD;
			log[page].state = 'damage';
			document.getElementById('state_damage').checked = true;
			if (dom.dsi) {
				dom.dsi.style.display = 'inline-block'
			};
			if (dom.ddi) {
				dom.ddi.style.display = 'inline-block'
			};
			if (dom.nsi) {
				dom.nsi.style.display = 'none'
			};
			if (dom.ndi) {
				dom.ndi.style.display = 'none'
			};
			stateVal = '_d'
		};
		for (i in material) {
			let str = imgStrSub(i);
			if (i == 'shipType') {
				window[str].src = local + '/' + page + '/ship_type/' + material[i][log['material'][i]] + '.png';
				document.getElementById(i).value = textVal.material[i][log['material'][i]]
			} else if (i != 'texturePosition' && i != 'fontLogo' && i != 'shipTypeBg' && i != "bgBorderDown" && i !=
				"bgBorderUp" && i != "borderDown" && i != "borderUp" && i != "border") {
				if (i == 'fall' && log['material'][i] == 0) {
					window[str].src = local + '/' + page + '/none.png'
				} else if (i == 'texture' && log['material'][i] == 0) {
					window[str].src = local + '/' + page + '/none.png'
				} else {
					window[str].src = local + '/' + page + '/' + i + '/' + material[i][log['material'][i]] + '.png'
				};
				document.getElementById(i).value = textVal.material[i][log['material'][i]]
			}
		};
		imgBorderDown.src = local + '/' + page + '/border/border_down.png';
		imgBorderUp.src = local + '/' + page + '/border/border_up.png'
	}()
};

function canvasSupplyCharacterPage(page, lang, local) {
	var imgDataN = imgData[imgData.level].full;
	var imgDataD = imgData[imgData.level].full_dmg;
	createElement({
		'dom': 'div',
		'appendId': ['content'],
		'id': page + 'Page',
		'className': [page + '-page-div']
	});
	createElement({
		'dom': 'h1',
		'appendId': [page + 'Page'],
		'className': [page + '-page-text-title', 'page-text-title'],
		'innerHTML': pageTitleText[3]
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'LeftDiv',
		'className': [page + '-left-div', 'left-div']
	});
	createElement({
		'dom': 'h2',
		'appendId': [page + 'LeftDiv'],
		'innerHTML': pageSettingText[0]
	});
	for (i in material) {
		let id = i;
		if (id != null && id != undefined && id != 'shipType' && id != 'badge' && id != 'texturePosition' && id != 'fontLogo' &&
			id != 'shipTypeBg' && id != 'bgBorderDown' && id != 'bgBorderUp' && id != 'borderDown' && id != 'borderUp' && id !=
			'border') {
			createElement({
				'dom': 'h3',
				'appendId': [page + 'LeftDiv'],
				'innerHTML': materialText[i]
			});
			createSelectElement(page, id, lang, page + 'LeftDiv')
		}
	};
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'MiddleDiv',
		'className': [page + '-middle-div', 'middle-div']
	});
	createElement({
		'dom': 'canvas',
		'appendId': [page + 'MiddleDiv'],
		'id': page + 'Canvas',
		'className': [page + '-middle-canvas', 'middle-canvas']
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'Canvas'],
		'className': ['canvas-error-text-p'],
		'innerHTML': canvasErrorText[0] + canvasErrorText[1] +
			"<a href='https://www.google.cn/intl/zh-CN/chrome/'>GoogleChrome</a>"
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'RightDiv',
		'className': [page + '-right-div', 'right-div']
	});
	createElement({
		'dom': 'h2',
		'appendId': [page + 'RightDiv'],
		'innerHTML': pageSettingText[1]
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[0]
	});
	if (imgDataN != undefined) {
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'state_normal',
			'className': ['state-normal-input'],
			'name': 'state',
			'type': 'radio',
			'value': 'normal',
		});
		createElement({
			'dom': 'span',
			'appendId': [page + 'RightDiv'],
			'innerHTML': settingRightText[1]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		});
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'saveNormal',
			'className': ['save-input'],
			'type': 'button',
			'value': settingRightText[11]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		})
	};
	if (imgDataD != undefined) {
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'state_damage',
			'className': ['state-damage-input'],
			'name': 'state',
			'type': 'radio',
			'value': 'damage',
		});
		createElement({
			'dom': 'span',
			'appendId': [page + 'RightDiv'],
			'innerHTML': settingRightText[2]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		});
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'saveDamage',
			'className': ['save-input'],
			'type': 'button',
			'value': settingRightText[11]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		})
	};
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[18]
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[19] + ':'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'plvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[20] + ':'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'ptvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[3]
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-min'],
		'innerHTML': '0'
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-max'],
		'innerHTML': '100'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'cri',
		'type': 'range',
		'value': '100',
		'setAttribute': {
			'min': '0',
			'max': '100'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'cvi',
		'type': 'number',
		'value': '100',
		'setAttribute': {
			'min': '0',
			'max': '100',
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[4]
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-min'],
		'innerHTML': '-180°'
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-max'],
		'innerHTML': '180°'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'rri',
		'type': 'range',
		'value': '0',
		'setAttribute': {
			'min': '-180',
			'max': '180'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'rvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'min': '-180',
			'max': '180',
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	const cas = document.getElementById(page + "Canvas");
	const ctx = cas.getContext("2d");
	const casW = 750;
	const casH = 450;
	cas.setAttribute('width', casW);
	cas.setAttribute('height', casH);
	const canvasDiv = document.getElementById(page + "MiddleDiv");
	canvasDiv.style.width = casW + 2 + 'px';
	const leftWidth = 800 - (casW / 2 + 200);
	document.getElementById(page + "LeftDiv").style.marginLeft = leftWidth + 'px';
	var state = 'normal';
	var x = 0;
	var y = 0;
	var dom = {};
	dom.nsi = document.getElementById("saveNormal");
	dom.dsi = document.getElementById("saveDamage");
	dom.ndi = document.getElementById("downloadNormal");
	dom.ddi = document.getElementById("downloadDamage");
	dom.plvi = document.getElementById("plvi");
	dom.ptvi = document.getElementById("ptvi");
	dom.cri = document.getElementById("cri");
	dom.cvi = document.getElementById("cvi");
	dom.rri = document.getElementById("rri");
	dom.rvi = document.getElementById("rvi");
	var img = new Image();
	img.onload = function() {
		log[page][log[page].state].w = img.width * (log[page][log[page].state].size * 0.01);
		log[page][log[page].state].h = img.height * (log[page][log[page].state].size * 0.01);
		rect[page].rectImg()
	};
	! function() {
		for (i in material) {
			if (i != null && i != undefined && i != 'shipType' && i != 'badge' && i != 'texturePosition' && i != 'fontLogo' && i !=
				'shipTypeBg' && i != 'bgBorderDown' && i != 'bgBorderUp' && i != 'borderDown' && i != 'borderUp') {
				let str = imgStrSub(i);
				window[str] = new Image();
				window[str].onload = function() {
					rect[page].rectImg()
				}
			};
		}
	}();
	! function() {
		let selectDom = document.getElementsByClassName('left-select');
		for (i = 0; i < selectDom.length; i++) {
			document.getElementById(selectDom[i].id).onchange = function() {
				let name = material[this.id][this.selectedIndex];
				let id = this.id;
				materialSwitch(id, name)
			}
		};
	}();

	function materialSwitch(a, b) {
		let str = imgStrSub(a);
		if (b == 'none') {
			window[str].src = "./img/supply_character/" + b + ".png";
			log['material'][a] = 0
		} else if (a == 'rare') {
			imgRare.src = "./img/supply_character/rare/" + b + ".png";
			imgBorder.src = "./img/supply_character/border/" + b + ".png";
			log['material'][a] = getNumber(a, b)
		} else {
			window[str].src = "./img/supply_character/" + a + "/" + b + ".png";
			log['material'][a] = getNumber(a, b)
		};

		function getNumber(k, v) {
			for (j = 0; j < material[k].length; j++) {
				if (material[k][j] == v) {
					return j
				}
			};
		}
	};

	function imgStrSub(a) {
		let strA = a;
		let strB = strA.substring(1);
		strA = strA.substring(0, 1);
		strA = strA.toUpperCase();
		let str = 'img' + strA + strB;
		return str
	};
	var sw = 711;
	var sh = 71;
	var iX = cas.width / 2 - sw / 2;
	var iY = cas.height / 2 - sh / 2;

	function borderRed() {
		let b = 1;
		ctx.beginPath();
		ctx.fillStyle = "#ff0000";
		ctx.rect(iX, iY - b, sw, b);
		ctx.rect(iX, iY + sh, sw, b);
		ctx.rect(iX - b, iY - b, b, sh + b * 2);
		ctx.rect(iX + sw, iY - b, b, sh + b * 2);
		ctx.fill();
		ctx.closePath()
	};
	rect[page].coverWhite = function() {
		ctx.beginPath();
		ctx.fillStyle = "#fff";
		ctx.rect(0, 0, casW, iY);
		ctx.rect(0, iY + sh, casW, iY);
		ctx.rect(0, iY, iX, sh);
		ctx.rect(iX + sw, iY, iX, sh);
		ctx.fill();
		ctx.closePath();
		borderRed()
	};
	rect[page].rectCanvas = function() {
		dom.cri.value = dom.cvi.value = parseFloat(log[page][log[page].state].size);
		dom.rri.value = dom.rvi.value = parseFloat(log[page][log[page].state].angle);
		log[page][log[page].state].x = log[page][log[page].state].x;
		log[page][log[page].state].y = log[page][log[page].state].y;
		log[page][log[page].state].angle = log[page][log[page].state].angle;
		log[page][log[page].state].size = log[page][log[page].state].size;
		ctx.clearRect(iX, iY, sw, sh);
		ctx.drawImage(imgRare, iX, iY, imgRare.width, imgRare.height);
		ctx.save();
		log[page][log[page].state].wHalf = log[page][log[page].state].x + (parseInt(log[page][log[page].state].w) / 2);
		log[page][log[page].state].hHalf = log[page][log[page].state].y + (parseInt(log[page][log[page].state].h) / 2);
		ctx.translate(log[page][log[page].state].wHalf, log[page][log[page].state].hHalf);
		ctx.rotate(log[page][log[page].state].angle * Math.PI / 180);
		ctx.translate(-log[page][log[page].state].wHalf, -log[page][log[page].state].hHalf);
		ctx.drawImage(img, log[page][log[page].state].x, log[page][log[page].state].y, log[page][log[page].state].w, log[
			page][log[page].state].h);
		ctx.restore();
		ctx.drawImage(imgFall, iX, iY, imgFall.width, imgFall.height);
		ctx.drawImage(imgTexture, iX, iY, imgTexture.width, imgTexture.height);
		ctx.drawImage(imgBorder, iX, iY, imgBorder.width, imgBorder.height)
	};
	rect[page].rectImg = function() {
		rect[page].rectCanvas();
		rect[page].coverWhite()
	};
	controlMove(cas, ctx, page, dom);
	controlSize(cas, page, dom, img);
	controlState(page, dom, img);
	var imgUrl;

	function saveImg(a, b) {
		cas.setAttribute('width', sw);
		cas.setAttribute('height', sh);
		var oX = iX;
		var oY = iY;
		iX = 0;
		iY = 0;
		log[page][log[page].state].x = log[page][log[page].state].x - oX;
		log[page][log[page].state].y = log[page][log[page].state].y - oY;
		rect[page].rectImg();
		imgUrl = cas.toDataURL({
			format: 'image/png',
			quality: 1
		});
		cas.setAttribute('width', casW);
		cas.setAttribute('height', casH);
		iX = oX;
		iY = oY;
		log[page][log[page].state].x = log[page][log[page].state].x + oX;
		log[page][log[page].state].y = log[page][log[page].state].y + oY;
		rect[page].rectImg();
		showOperation(a);
		if (page == 'supply_character') {
			if (log[page].state == 'normal') {
				imgData[imgData.level][page] = imgUrl
			} else if (log[page].state == 'damage') {
				imgData[imgData.level][page + '_dmg'] = imgUrl
			}
		};
	};

	function showOperation(a) {
		createCanvas(a, "Show");
		const casS = document.getElementById(a + "ShowCanvas");
		const ctxS = casS.getContext("2d");
		var imgS = new Image();
		imgS.src = imgUrl;
		imgS.onload = function() {
			ctxS.drawImage(imgS, 0, 0, imgS.width, imgS.height)
		};
		casS.oncontextmenu = function(e) {
			e.preventDefault();
			delExportDiv(a + 'ShowDiv')
		}
	};

	function createCanvas(a, b) {
		const dcw = window.innerWidth;
		const dch = window.innerHeight;
		createElement({
			'dom': 'div',
			'appendDom': 'body',
			'id': a + 'ShowDiv',
			'className': ['export_div'],
			'style': {
				'width': dcw + 'px',
				'height': dch + 'px',
			},
			'setAttribute': {
				'onclick': 'delExportDiv("' + a + 'ShowDiv")'
			}
		});
		createElement({
			'dom': 'canvas',
			'appendId': [a + 'ShowDiv'],
			'id': a + b + 'Canvas',
			'className': [a + '-middle-canvas', 'middle-canvas'],
			'style': {
				'marginTop': (dch - sh) / 2 + 'px'
			},
			'setAttribute': {
				'width': sw + 'px',
				'height': sh + 'px'
			},
		});
		createElement({
			'dom': 'p',
			'appendId': [a + b + 'Canvas'],
			'className': ['canvas-error-text-p'],
			'innerHTML': canvasErrorText[0] + canvasErrorText[1] +
				"<a href='https://www.google.cn/intl/zh-CN/chrome/'>GoogleChrome</a>"
		})
	};

	function downLoadImg(a) {
		var urlData = {};
		if (a == 'Normal') {
			urlData[page] = imgUrl
		} else if (a == 'Damage') {
			urlData[page + '_dmg'] = imgUrl
		};
		for (i in urlData) {
			const element = document.createElement("a");
			element.download = i;
			element.href = urlData[i];
			document.body.appendChild(element);
			element.click();
			element.remove()
		}
	};
	! function() {
		if (document.getElementById("saveNormal")) {
			document.getElementById("saveNormal").onclick = function() {
				saveImg(page, 'Normal')
			}
		};
		if (document.getElementById("saveDamage")) {
			document.getElementById("saveDamage").onclick = function() {
				saveImg(page, 'Damage')
			}
		};
		if (document.getElementById("downloadNormal")) {
			document.getElementById("downloadNormal").onclick = function() {
				downLoadImg('Normal')
			}
		};
		if (document.getElementById("downloadDamage")) {
			document.getElementById("downloadDamage").onclick = function() {
				downLoadImg('Damage')
			}
		};
		var levelSelect = document.getElementsByName('level');
		for (i = 0; i < levelSelect.length; i++) {
			document.getElementsByName('level')[i].onclick = function() {
				imgData.level = this.id;
				if (page == 'supply_character') {
					if (imgDataN != undefined && imgData[imgData.level].full == undefined) {
						switchPageFun('full');
						return
					} else if (imgDataD != undefined && imgData[imgData.level].full_dmg == undefined) {
						switchPageFun('full');
						return
					}
				};
				if (imgDataN != undefined) {
					log[page].state = 'normal';
					if (imgDataD != undefined) {
						document.getElementById('state_damage').checked = false
					};
					document.getElementById('state_normal').checked = true;
					if (dom.nsi) {
						dom.nsi.style.display = 'inline-block'
					};
					if (dom.ndi) {
						dom.ndi.style.display = 'inline-block'
					};
					if (dom.dsi) {
						dom.dsi.style.display = 'none'
					};
					if (dom.ddi) {
						dom.ddi.style.display = 'none'
					}
				};
				if (page == 'supply_character') {
					if (log[page].state == 'normal') {
						img.src = imgDataN = imgData[imgData.level].orgN
					} else if (log[page].state == 'damage') {
						img.src = imgDataD = imgData[imgData.level].orgD
					}
				};
				rect[page].rectImg()
			}
		};
	}();
	! function() {
		if (imgDataN != undefined) {
			img.src = imgDataN;
			log[page].state = 'normal';
			document.getElementById('state_normal').checked = true;
			if (dom.nsi) {
				dom.nsi.style.display = 'inline-block'
			};
			if (dom.ndi) {
				dom.ndi.style.display = 'inline-block'
			};
			if (dom.dsi) {
				dom.dsi.style.display = 'none'
			};
			if (dom.ddi) {
				dom.ddi.style.display = 'none'
			};
			stateVal = '_n'
		} else if (imgDataN == undefined && imgDataD != undefined) {
			img.src = imgDataD;
			log[page].state = 'damage';
			document.getElementById('state_damage').checked = true;
			if (dom.dsi) {
				dom.dsi.style.display = 'inline-block'
			};
			if (dom.ddi) {
				dom.ddi.style.display = 'inline-block'
			};
			if (dom.nsi) {
				dom.nsi.style.display = 'none'
			};
			if (dom.ndi) {
				dom.ndi.style.display = 'none'
			};
			stateVal = '_d'
		};
		for (i in material) {
			let str = imgStrSub(i);
			if (i == 'rare') {
				imgRare.src = './img/supply_character/rare/' + material[i][log['material'][i]] + '.png';
				imgBorder.src = './img/supply_character/border/' + material[i][log['material'][i]] + '.png';
				document.getElementById(i).value = textVal.material[i][log['material'][i]]
			} else if (i != 'shipType' && i != 'badge' && i != 'texturePosition' && i != 'fontLogo' && i != 'shipTypeBg' && i !=
				"bgBorderDown" && i != "bgBorderUp" && i != "borderDown" && i != "borderUp" && i != "border") {
				if (i == 'fall' && log['material'][i] == 0) {
					window[str].src = local + '/' + page + '/none.png'
				} else if (i == 'texture' && log['material'][i] == 0) {
					window[str].src = local + '/' + page + '/none.png'
				} else {
					window[str].src = local + '/' + page + '/' + i + '/' + material[i][log['material'][i]] + '.png';
					document.getElementById(i).value = textVal.material[i][log['material'][i]]
				}
			};
		}
	}()
};

function canvasCharacterFeatherPage(page, lang, local) {
	var imgDataN, imgDataD, pageTitle;
	if (page == 'character_up') {
		imgDataN = imgData[imgData.level].full_x2;
		imgDataD = imgData[imgData.level].full_x2_dmg;
		pageTitle = pageTitleText[5]
	} else if (page == 'character_full') {
		imgDataN = imgData[imgData.level].full;
		imgDataD = imgData[imgData.level].full_dmg;
		pageTitle = pageTitleText[4]
	};
	createElement({
		'dom': 'div',
		'appendId': ['content'],
		'id': page + 'Page',
		'className': [page + '-page-div']
	});
	createElement({
		'dom': 'h1',
		'appendId': [page + 'Page'],
		'className': [page + '-page-text-title', 'page-text-title'],
		'innerHTML': pageTitle
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'LeftDiv',
		'className': [page + '-left-div', 'left-div']
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'MiddleDiv',
		'className': [page + '-middle-div', 'middle-div']
	});
	createElement({
		'dom': 'canvas',
		'appendId': [page + 'MiddleDiv'],
		'id': page + 'Canvas',
		'className': [page + '-middle-canvas', 'middle-canvas']
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'Canvas'],
		'className': ['canvas-error-text-p'],
		'innerHTML': canvasErrorText[0] + canvasErrorText[1] +
			"<a href='https://www.google.cn/intl/zh-CN/chrome/'>GoogleChrome</a>"
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'RightDiv',
		'className': [page + '-right-div', 'right-div']
	});
	createElement({
		'dom': 'h2',
		'appendId': [page + 'RightDiv'],
		'innerHTML': pageSettingText[1]
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[0]
	});
	if (imgDataN != undefined) {
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'state_normal',
			'className': ['state-normal-input'],
			'name': 'state',
			'type': 'radio',
			'value': 'normal',
		});
		createElement({
			'dom': 'span',
			'appendId': [page + 'RightDiv'],
			'innerHTML': settingRightText[1]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		});
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'saveNormal',
			'className': ['save-input'],
			'type': 'button',
			'value': settingRightText[11]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		})
	};
	if (imgDataD != undefined) {
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'state_damage',
			'className': ['state-damage-input'],
			'name': 'state',
			'type': 'radio',
			'value': 'damage',
		});
		createElement({
			'dom': 'span',
			'appendId': [page + 'RightDiv'],
			'innerHTML': settingRightText[2]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		});
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'saveDamage',
			'className': ['save-input'],
			'type': 'button',
			'value': settingRightText[11]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		})
	};
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[18]
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[19] + ':'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'plvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[20] + ':'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'ptvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[3]
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-min'],
		'innerHTML': '0'
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-max'],
		'innerHTML': '100'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'cri',
		'type': 'range',
		'value': '100',
		'setAttribute': {
			'min': '0',
			'max': '100'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'cvi',
		'type': 'number',
		'value': '100',
		'setAttribute': {
			'min': '0',
			'max': '100',
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[4]
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-min'],
		'innerHTML': '-180°'
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-max'],
		'innerHTML': '180°'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'rri',
		'type': 'range',
		'value': '0',
		'setAttribute': {
			'min': '-180',
			'max': '180'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'rvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'min': '-180',
			'max': '180',
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	const cas = document.getElementById(page + "Canvas");
	const ctx = cas.getContext("2d");
	const casW = 431;
	const casH = 645;
	cas.setAttribute('width', casW);
	cas.setAttribute('height', casH);
	const canvasDiv = document.getElementById(page + "MiddleDiv");
	canvasDiv.style.width = casW + 2 + 'px';
	const leftWidth = 800 - (casW / 2 + 200);
	document.getElementById(page + "LeftDiv").style.marginLeft = leftWidth + 'px';
	var state = 'normal';
	var x = 0;
	var y = 0;
	var dom = {};
	dom.nsi = document.getElementById("saveNormal");
	dom.dsi = document.getElementById("saveDamage");
	dom.ndi = document.getElementById("downloadNormal");
	dom.ddi = document.getElementById("downloadDamage");
	dom.plvi = document.getElementById("plvi");
	dom.ptvi = document.getElementById("ptvi");
	dom.cri = document.getElementById("cri");
	dom.cvi = document.getElementById("cvi");
	dom.rri = document.getElementById("rri");
	dom.rvi = document.getElementById("rvi");
	var img = new Image();
	img.onload = function() {
		log[page][log[page].state].w = img.width * (log[page][log[page].state].size * 0.01);
		log[page][log[page].state].h = img.height * (log[page][log[page].state].size * 0.01);
		rect[page].rectImg()
	};
	rect[page].rectImg = function() {
		dom.cri.value = dom.cvi.value = parseFloat(log[page][log[page].state].size);
		dom.rri.value = dom.rvi.value = parseFloat(log[page][log[page].state].angle);
		log[page][log[page].state].x = log[page][log[page].state].x;
		log[page][log[page].state].y = log[page][log[page].state].y;
		log[page][log[page].state].angle = log[page][log[page].state].angle;
		log[page][log[page].state].size = log[page][log[page].state].size;
		ctx.clearRect(0, 0, cas.width, cas.height);
		ctx.save();
		log[page][log[page].state].wHalf = log[page][log[page].state].x + (parseInt(log[page][log[page].state].w) / 2);
		log[page][log[page].state].hHalf = log[page][log[page].state].y + (parseInt(log[page][log[page].state].h) / 2);
		ctx.translate(log[page][log[page].state].wHalf, log[page][log[page].state].hHalf);
		ctx.rotate(log[page][log[page].state].angle * Math.PI / 180);
		ctx.translate(-log[page][log[page].state].wHalf, -log[page][log[page].state].hHalf);
		ctx.drawImage(img, log[page][log[page].state].x, log[page][log[page].state].y, log[page][log[page].state].w, log[
			page][log[page].state].h);
		ctx.restore()
	};
	controlMove(cas, ctx, page, dom);
	controlSize(cas, page, dom, img);
	controlState(page, dom, img);
	var imgUrl, imgUrlF;

	function saveImg(page, states) {
		imgUrl = cas.toDataURL({
			format: 'image/png',
			quality: 1
		});
		featherOperation(page);
	};

	function featherOperation(a) {
		createCanvas(a, "Feather");
		const casF = document.getElementById(a + "FeatherCanvas");
		const ctxF = casF.getContext("2d");
		var imgF = new Image();
		imgF.src = imgUrl;
		imgF.onload = function() {
			let ih = casF.height;
			let iw = casF.width;
			let value = (iw + ih) * 0.05;
			let isize = parseInt(value);
			ctxF.clearRect(0, 0, casF.width, casF.height);
			ctxF.globalCompositeOperation = "source-over";
			ctxF.drawImage(imgF, 0, 0, imgF.width, imgF.height);
			ctxF.save();
			ctxF.globalCompositeOperation = "destination-out";
			addFrameMask(ctxF, 0, 0, iw, ih, isize, 255);
			ctxF.restore();
			imgUrlF = casF.toDataURL({
				format: 'image/png',
				quality: 1
			})
			if(page=='character_full'||page=='character_up'){
				if(log[page].state=='normal'){
					imgData[ imgData.level ][ page ] = imgUrlF;
				}else if(log[page].state=='damage'){
					imgData[ imgData.level ][ page+'_dmg' ] = imgUrlF;
				}
			}
		};
		casF.oncontextmenu = function(e) {
			e.preventDefault();
			delExportDiv(a + 'ShowDiv')
		}
	};

	function addFrameMask(ctx, x, y, w, h, size, color) {
		let style;
		const cn = 1;
		style = setLinearStyle(ctx, x + size, y + size + cn, x + size, y + cn, color);
		ctx.fillStyle = style;
		ctx.fillRect(x + size, y, w - (size * 2), size);
		style = setRadialStyle(ctx, x + size, y + size, 0, x + size, y + size + cn, size, color);
		ctx.fillStyle = style;
		ctx.fillRect(x, y, size, size);
		style = setLinearStyle(ctx, x + size, y + size, x + cn, y + size, color);
		ctx.fillStyle = style;
		ctx.fillRect(x, y + size, size, h - (size * 2));
		style = setRadialStyle(ctx, x + size, y + h - size, 0, x + size, y + h - size - cn, size, color);
		ctx.fillStyle = style;
		ctx.fillRect(x, y + h - size, size, size);
		style = setLinearStyle(ctx, x + size, y + h - size, x + size, y + h - cn, color);
		ctx.fillStyle = style;
		ctx.fillRect(x + size, y + h - size, w - (size * 2), size);
		style = setRadialStyle(ctx, x + w - size, y + h - size, 0, x + w - size, y + h - size - cn, size, color);
		ctx.fillStyle = style;
		ctx.fillRect(x + w - size, y + h - size, size, size);
		style = setLinearStyle(ctx, x + w - size, y + size, x + w - cn, y + size, color);
		ctx.fillStyle = style;
		ctx.fillRect(x + w - size, y + size, size, h - (size * 2));
		style = setRadialStyle(ctx, x + w - size, y + size, 0, x + w - size, y + size + cn, size, color);
		ctx.fillStyle = style;
		ctx.fillRect(x + w - size, y, size, size)
	};

	function setRadialStyle(ctx, x1, y1, r1, x2, y2, r2, color) {
		let tmp = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);
		tmp.addColorStop(0, 'rgba(' + color + ',' + color + ',' + color + ', 0)');
		tmp.addColorStop(0.5, 'rgba(' + color + ',' + color + ',' + color + ', 0)');
		tmp.addColorStop(1, 'rgba(' + color + ',' + color + ',' + color + ', 1)');
		return tmp
	};

	function setLinearStyle(ctx, x1, y1, x2, y2, color) {
		let tmp = ctx.createLinearGradient(x1, y1, x2, y2);
		tmp.addColorStop(0, 'rgba(' + color + ',' + color + ',' + color + ', 0)');
		tmp.addColorStop(0.5, 'rgba(' + color + ',' + color + ',' + color + ', 0)');
		tmp.addColorStop(1, 'rgba(' + color + ',' + color + ',' + color + ', 1)');
		return tmp
	};

	function createCanvas(a, b) {
		const dcw = window.innerWidth;
		const dch = window.innerHeight;
		createElement({
			'dom': 'div',
			'appendDom': 'body',
			'id': a + 'ShowDiv',
			'className': ['export_div'],
			'style': {
				'width': dcw + 'px',
				'height': dch + 'px',
			},
			'setAttribute': {
				'onclick': 'delExportDiv("' + a + 'ShowDiv")'
			}
		});
		createElement({
			'dom': 'canvas',
			'appendId': [a + 'ShowDiv'],
			'id': a + b + 'Canvas',
			'className': [a + '-middle-canvas', 'middle-canvas'],
			'style': {
				'marginTop': (dch - casH) / 2 + 'px',
				'marginLeft': '20px'
			},
			'setAttribute': {
				'width': casW + 'px',
				'height': casH + 'px'
			},
		});
		createElement({
			'dom': 'p',
			'appendId': [a + b + 'Canvas'],
			'className': ['canvas-error-text-p'],
			'innerHTML': canvasErrorText[0] + canvasErrorText[1] +
				"<a href='https://www.google.cn/intl/zh-CN/chrome/'>GoogleChrome</a>"
		})
	};

	function downLoadImg(a) {
		var urlData = {};
		if (a == 'Normal') {
			urlData[page] = imgUrl
		} else if (a == 'Damage') {
			urlData[page + '_dmg'] = imgUrl
		};
		for (i in urlData) {
			const element = document.createElement("a");
			element.download = i;
			element.href = urlData[i];
			document.body.appendChild(element);
			element.click();
			element.remove()
		}
	};
	! function() {
		if (document.getElementById("saveNormal")) {
			document.getElementById("saveNormal").onclick = function() {
				saveImg(page, 'Normal')
			}
		};
		if (document.getElementById("saveDamage")) {
			document.getElementById("saveDamage").onclick = function() {
				saveImg(page, 'Damage')
			}
		};
		if (document.getElementById("downloadNormal")) {
			document.getElementById("downloadNormal").onclick = function() {
				downLoadImg('Normal')
			}
		};
		if (document.getElementById("downloadDamage")) {
			document.getElementById("downloadDamage").onclick = function() {
				downLoadImg('Damage')
			}
		};
		var levelSelect = document.getElementsByName('level');
		for (i = 0; i < levelSelect.length; i++) {
			document.getElementsByName('level')[i].onclick = function() {
				imgData.level = this.id;
				if (page == 'character_full') {
					if (imgDataN != undefined && imgData[imgData.level].full == undefined) {
						switchPageFun('full');
						return
					} else if (imgDataD != undefined && imgData[imgData.level].full_dmg == undefined) {
						switchPageFun('full');
						return
					}
				} else if (page == 'character_up') {
					if (imgDataN != undefined && imgData[imgData.level].full_x2 == undefined) {
						switchPageFun('full');
						return
					} else if (imgDataD != undefined && imgData[imgData.level].full_dmg_x2 == undefined) {
						switchPageFun('full');
						return
					}
				};
				if (imgDataN != undefined) {
					log[page].state = 'normal';
					if (imgDataD != undefined) {
						document.getElementById('state_damage').checked = false
					};
					document.getElementById('state_normal').checked = true;
					if (dom.nsi) {
						dom.nsi.style.display = 'inline-block'
					};
					if (dom.ndi) {
						dom.ndi.style.display = 'inline-block'
					};
					if (dom.dsi) {
						dom.dsi.style.display = 'none'
					};
					if (dom.ddi) {
						dom.ddi.style.display = 'none'
					}
				};
				if (page == 'character_full') {
					if (log[page].state == 'normal') {
						img.src = imgDataN = imgData[imgData.level].orgN
					} else if (log[page].state == 'damage') {
						img.src = imgDataD = imgData[imgData.level].orgD
					}
				} else if (page == 'character_up') {
					if (log[page].state == 'normal') {
						img.src = imgDataN = imgData[imgData.level].orgNx2
					} else if (log[page].state == 'damage') {
						img.src = imgDataD = imgData[imgData.level].orgDx2
					}
				};
				rect[page].rectImg()
			}
		};
	}();
	! function() {
		if (imgDataN != undefined) {
			img.src = imgDataN;
			log[page].state = 'normal';
			document.getElementById('state_normal').checked = true;
			if (dom.nsi) {
				dom.nsi.style.display = 'inline-block'
			};
			if (dom.ndi) {
				dom.ndi.style.display = 'inline-block'
			};
			if (dom.dsi) {
				dom.dsi.style.display = 'none'
			};
			if (dom.ddi) {
				dom.ddi.style.display = 'none'
			};
			stateVal = '_n'
		} else if (imgDataN == undefined && imgDataD != undefined) {
			img.src = imgDataD;
			log[page].state = 'damage';
			document.getElementById('state_damage').checked = true;
			if (dom.dsi) {
				dom.dsi.style.display = 'inline-block'
			};
			if (dom.ddi) {
				dom.ddi.style.display = 'inline-block'
			};
			if (dom.nsi) {
				dom.nsi.style.display = 'none'
			};
			if (dom.ndi) {
				dom.ndi.style.display = 'none'
			};
			stateVal = '_d'
		}
	}()
};

function canvasRemodelPage(page, lang, local) {
	var imgDataN = imgData[imgData.level].full_x2;
	var imgDataD = imgData[imgData.level].full_x2_dmg;
	createElement({
		'dom': 'div',
		'appendId': ['content'],
		'id': page + 'Page',
		'className': [page + '-page-div']
	});
	createElement({
		'dom': 'h1',
		'appendId': [page + 'Page'],
		'className': [page + '-page-text-title', 'page-text-title'],
		'innerHTML': pageTitleText[6]
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'LeftDiv',
		'className': [page + '-left-div', 'left-div']
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'MiddleDiv',
		'className': [page + '-middle-div', 'middle-div']
	});
	createElement({
		'dom': 'canvas',
		'appendId': [page + 'MiddleDiv'],
		'id': page + 'Canvas',
		'className': [page + '-middle-canvas', 'middle-canvas']
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'Canvas'],
		'className': ['canvas-error-text-p'],
		'innerHTML': canvasErrorText[0] + canvasErrorText[1] +
			"<a href='https://www.google.cn/intl/zh-CN/chrome/'>GoogleChrome</a>"
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'RightDiv',
		'className': [page + '-right-div', 'right-div']
	});
	createElement({
		'dom': 'h2',
		'appendId': [page + 'RightDiv'],
		'innerHTML': pageSettingText[1]
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[0]
	});
	if (imgDataN != undefined) {
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'state_normal',
			'className': ['state-normal-input'],
			'name': 'state',
			'type': 'radio',
			'value': 'normal',
		});
		createElement({
			'dom': 'span',
			'appendId': [page + 'RightDiv'],
			'innerHTML': settingRightText[1]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		});
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'saveNormal',
			'className': ['save-input'],
			'type': 'button',
			'value': settingRightText[11]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		})
	};
	if (imgDataD != undefined) {
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'state_damage',
			'className': ['state-damage-input'],
			'name': 'state',
			'type': 'radio',
			'value': 'damage',
		});
		createElement({
			'dom': 'span',
			'appendId': [page + 'RightDiv'],
			'innerHTML': settingRightText[2]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		});
		createElement({
			'dom': 'input',
			'appendId': [page + 'RightDiv'],
			'id': 'saveDamage',
			'className': ['save-input'],
			'type': 'button',
			'value': settingRightText[11]
		});
		createElement({
			'dom': 'br',
			'appendId': [page + 'RightDiv']
		})
	};
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[18]
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[19] + ':'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'plvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[20] + ':'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'ptvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[3]
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-min'],
		'innerHTML': '0'
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-max'],
		'innerHTML': '100'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'cri',
		'type': 'range',
		'value': '100',
		'setAttribute': {
			'min': '0',
			'max': '100'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'cvi',
		'type': 'number',
		'value': '100',
		'setAttribute': {
			'min': '0',
			'max': '100',
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[4]
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-min'],
		'innerHTML': '-180°'
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-max'],
		'innerHTML': '180°'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'rri',
		'type': 'range',
		'value': '0',
		'setAttribute': {
			'min': '-180',
			'max': '180'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'rvi',
		'type': 'number',
		'value': '0',
		'setAttribute': {
			'min': '-180',
			'max': '180',
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	const cas = document.getElementById(page + "Canvas");
	const ctx = cas.getContext("2d");
	const casW = 998;
	const casH = 182;
	cas.setAttribute('width', casW);
	cas.setAttribute('height', casH);
	const canvasDiv = document.getElementById(page + "MiddleDiv");
	canvasDiv.style.width = casW + 2 + 'px';
	const leftWidth = 800 - (casW / 2 + 200);
	document.getElementById(page + "LeftDiv").style.marginLeft = leftWidth + 'px';
	var state = 'normal';
	var x = 0;
	var y = 0;
	var dom = {};
	dom.nsi = document.getElementById("saveNormal");
	dom.dsi = document.getElementById("saveDamage");
	dom.ndi = document.getElementById("downloadNormal");
	dom.ddi = document.getElementById("downloadDamage");
	dom.plvi = document.getElementById("plvi");
	dom.ptvi = document.getElementById("ptvi");
	dom.cri = document.getElementById("cri");
	dom.cvi = document.getElementById("cvi");
	dom.rri = document.getElementById("rri");
	dom.rvi = document.getElementById("rvi");
	var img = new Image();
	img.onload = function() {
		log[page][log[page].state].w = img.width * (log[page][log[page].state].size * 0.01);
		log[page][log[page].state].h = img.height * (log[page][log[page].state].size * 0.01);
		rect[page].rectImg()
	};
	rect[page].rectImg = function() {
		dom.cri.value = dom.cvi.value = parseFloat(log[page][log[page].state].size);
		dom.rri.value = dom.rvi.value = parseFloat(log[page][log[page].state].angle);
		ctx.clearRect(0, 0, cas.width, cas.height);
		ctx.save();
		log[page][log[page].state].wHalf = log[page][log[page].state].x + (parseInt(log[page][log[page].state].w) / 2);
		log[page][log[page].state].hHalf = log[page][log[page].state].y + (parseInt(log[page][log[page].state].h) / 2);
		ctx.translate(log[page][log[page].state].wHalf, log[page][log[page].state].hHalf);
		ctx.rotate(log[page][log[page].state].angle * Math.PI / 180);
		ctx.translate(-log[page][log[page].state].wHalf, -log[page][log[page].state].hHalf);
		ctx.drawImage(img, log[page][log[page].state].x, log[page][log[page].state].y, log[page][log[page].state].w, log[
			page][log[page].state].h);
		ctx.restore()
	};
	controlMove(cas, ctx, page, dom);
	controlSize(cas, page, dom, img);
	controlState(page, dom, img);
	var imgUrl;

	function saveImg(a, b) {
		ctx.clearRect(0, 0, cas.width, 3);
		ctx.clearRect(0, cas.height - 3, cas.width, 3);
		imgUrl = cas.toDataURL({
			format: 'image/png',
			quality: 1
		});
		rect[page].rectImg();
		showOperation(a);
		if (page == 'remodel') {
			if (log[page].state == 'normal') {
				imgData[imgData.level][page] = imgUrl
			} else if (log[page].state == 'damage') {
				imgData[imgData.level][page + '_dmg'] = imgUrl
			}
		};
	};

	function showOperation(a) {
		createCanvas(a, "Show");
		const casS = document.getElementById(a + "ShowCanvas");
		const ctxS = casS.getContext("2d");
		var imgS = new Image();
		imgS.src = imgUrl;
		imgS.onload = function() {
			ctxS.drawImage(imgS, 0, 0, imgS.width, imgS.height)
		};
		casS.oncontextmenu = function(e) {
			e.preventDefault();
			delExportDiv(a + 'ShowDiv')
		}
	};

	function createCanvas(a, b) {
		const dcw = window.innerWidth;
		const dch = window.innerHeight;
		createElement({
			'dom': 'div',
			'appendDom': 'body',
			'id': a + 'ShowDiv',
			'className': ['export_div'],
			'style': {
				'width': dcw + 'px',
				'height': dch + 'px',
			},
			'setAttribute': {
				'onclick': 'delExportDiv("' + a + 'ShowDiv")'
			}
		});
		createElement({
			'dom': 'canvas',
			'appendId': [a + 'ShowDiv'],
			'id': a + b + 'Canvas',
			'className': [a + '-middle-canvas', 'middle-canvas'],
			'style': {
				'marginTop': (dch - casH) / 2 + 'px',
				'marginLeft': '20px'
			},
			'setAttribute': {
				'width': casW + 'px',
				'height': casH + 'px'
			},
		});
		createElement({
			'dom': 'p',
			'appendId': [a + b + 'Canvas'],
			'className': ['canvas-error-text-p'],
			'innerHTML': canvasErrorText[0] + canvasErrorText[1] +
				"<a href='https://www.google.cn/intl/zh-CN/chrome/'>GoogleChrome</a>"
		})
	};

	function downLoadImg(a) {
		var urlData = {};
		if (a == 'Normal') {
			urlData[page] = imgUrl
		} else if (a == 'Damage') {
			urlData[page + '_dmg'] = imgUrl
		};
		for (i in urlData) {
			const element = document.createElement("a");
			element.download = i;
			element.href = urlData[i];
			document.body.appendChild(element);
			element.click();
			element.remove()
		}
	};
	! function() {
		if (document.getElementById("saveNormal")) {
			document.getElementById("saveNormal").onclick = function() {
				saveImg(page, 'Normal')
			}
		};
		if (document.getElementById("saveDamage")) {
			document.getElementById("saveDamage").onclick = function() {
				saveImg(page, 'Damage')
			}
		};
		if (document.getElementById("downloadNormal")) {
			document.getElementById("downloadNormal").onclick = function() {
				downLoadImg('Normal')
			}
		};
		if (document.getElementById("downloadDamage")) {
			document.getElementById("downloadDamage").onclick = function() {
				downLoadImg('Damage')
			}
		};
		var levelSelect = document.getElementsByName('level');
		for (i = 0; i < levelSelect.length; i++) {
			document.getElementsByName('level')[i].onclick = function() {
				imgData.level = this.id;
				if (page == 'remodel') {
					if (imgDataN != undefined && imgData[imgData.level].full_x2 == undefined) {
						switchPageFun('full');
						return
					} else if (imgDataD != undefined && imgData[imgData.level].full_dmg_x2 == undefined) {
						switchPageFun('full');
						return
					}
				};
				if (imgDataN != undefined) {
					log[page].state = 'normal';
					if (imgDataD != undefined) {
						document.getElementById('state_damage').checked = false
					};
					document.getElementById('state_normal').checked = true;
					if (dom.nsi) {
						dom.nsi.style.display = 'inline-block'
					};
					if (dom.ndi) {
						dom.ndi.style.display = 'inline-block'
					};
					if (dom.dsi) {
						dom.dsi.style.display = 'none'
					};
					if (dom.ddi) {
						dom.ddi.style.display = 'none'
					}
				};
				if (page == 'remodel') {
					if (log[page].state == 'normal') {
						img.src = imgDataN = imgData[imgData.level].orgNx2
					} else if (log[page].state == 'damage') {
						img.src = imgDataD = imgData[imgData.level].orgDx2
					}
				};
				rect[page].rectImg()
			}
		};
	}();
	! function() {
		if (imgDataN != undefined) {
			img.src = imgDataN;
			log[page].state = 'normal';
			document.getElementById('state_normal').checked = true;
			if (dom.nsi) {
				dom.nsi.style.display = 'inline-block'
			};
			if (dom.ndi) {
				dom.ndi.style.display = 'inline-block'
			};
			if (dom.dsi) {
				dom.dsi.style.display = 'none'
			};
			if (dom.ddi) {
				dom.ddi.style.display = 'none'
			};
			stateVal = '_n'
		} else if (imgDataN == undefined && imgDataD != undefined) {
			img.src = imgDataD;
			log[page].state = 'damage';
			document.getElementById('state_damage').checked = true;
			if (dom.dsi) {
				dom.dsi.style.display = 'inline-block'
			};
			if (dom.ddi) {
				dom.ddi.style.display = 'inline-block'
			};
			if (dom.nsi) {
				dom.nsi.style.display = 'none'
			};
			if (dom.ndi) {
				dom.ndi.style.display = 'none'
			};
			stateVal = '_d'
		}
	}()
};

function canvasAlbumStatusPage(page, lang, local) {
	var imgDataN = imgData[imgData.level].full;
	var imgDataD = imgData[imgData.level].full_dmg;
	createElement({
		'dom': 'div',
		'appendId': ['content'],
		'id': page + 'Page',
		'className': [page + '-page-div']
	});
	createElement({
		'dom': 'h1',
		'appendId': [page + 'Page'],
		'className': [page + '-page-text-title', 'page-text-title'],
		'innerHTML': pageTitleText[1]
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'LeftDiv',
		'className': [page + '-left-div', 'left-div']
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'MiddleDiv',
		'className': [page + '-middle-div', 'middle-div']
	});
	createElement({
		'dom': 'canvas',
		'appendId': [page + 'MiddleDiv'],
		'id': page + 'Canvas',
		'className': [page + '-middle-canvas', 'middle-canvas']
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'Canvas'],
		'className': ['canvas-error-text-p'],
		'innerHTML': canvasErrorText[0] + canvasErrorText[1] +
			"<a href='https://www.google.cn/intl/zh-CN/chrome/'>GoogleChrome</a>"
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'RightDiv',
		'className': [page + '-right-div', 'right-div'],
		'style': {
			'width': '250px'
		}
	});
	createElement({
		'dom': 'h2',
		'appendId': [page + 'RightDiv'],
		'innerHTML': pageSettingText[1]
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[21]
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-min'],
		'innerHTML': '0'
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'RightDiv'],
		'className': ['right-max'],
		'innerHTML': '58'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'fri',
		'type': 'range',
		'value': '58',
		'setAttribute': {
			'min': '0',
			'max': '58'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'fvi',
		'type': 'number',
		'value': '58',
		'setAttribute': {
			'min': '0',
			'max': '58',
			'onmousewheel': ''
		},
		'style': {
			'width': '100px'
		},
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[5]
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[9] + '：'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'shipNameText',
		'className': ['shipName_input'],
		'type': 'text',
		'value': albumStatusData[imgData.level]['albumStatusName'],
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[22] + '：'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'shipClassText',
		'className': ['shipName_input'],
		'type': 'text',
		'value': log['font']['shipClass'],
		'style': {
			'width': '240px'
		}
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'span',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[23] + '：'
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'shipTypeText',
		'className': ['shipName_input'],
		'type': 'text',
		'value': log['font']['shipType']
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'br',
		'appendId': [page + 'RightDiv']
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'save',
		'className': ['save-input'],
		'type': 'button',
		'value': settingRightText[11]
	});
	const cas = document.getElementById(page + "Canvas");
	const ctx = cas.getContext("2d");
	const casW = 654;
	const casH = 95;
	cas.setAttribute('width', casW);
	cas.setAttribute('height', casH);
	const canvasDiv = document.getElementById(page + "MiddleDiv");
	canvasDiv.style.width = casW + 2 + 'px';
	const leftWidth = 800 - (casW / 2 + 200);
	document.getElementById(page + "LeftDiv").style.marginLeft = leftWidth + 'px';
	cas.style.backgroundColor = '#282828';
	var dom = {};
	dom.nsi = document.getElementById("saveNormal");
	dom.dsi = document.getElementById("saveDamage");
	dom.ndi = document.getElementById("downloadNormal");
	dom.ddi = document.getElementById("downloadDamage");
	dom.fri = document.getElementById("fri");
	dom.fvi = document.getElementById("fvi");
	dom.fnv = document.getElementById("shipNameText");
	dom.fcv = document.getElementById("shipClassText");
	dom.ftv = document.getElementById("shipTypeText");

	function fontSet(size, family, color, text, x, y) {
		ctx.font = size + ' ' + family;
		ctx.fillStyle = color;
		ctx.fillText(text, x, y);
		ctx.restore();
	};

	function fontWidth(str, size) {
		ctx.font = size + 'px A-OTF-RyuminPro-Heavy';
		let x = 600 - ctx.measureText(str).width;
		return x;
	};

	function createFont(shipName, fontSize, shipClass, shipType) {
		fontSet('25px', 'Vani', '#fff', 'No.', 20, 56);
		fontSet(fontSize + 'px', 'A-OTF-RyuminPro-Heavy', '#c4a957', shipName, 152, 60);
		fontSet('22px', 'A-OTF-RyuminPro-Heavy', '#c4a957', shipClass, fontWidth(shipClass, 22), 30);
		fontSet('28px', 'A-OTF-RyuminPro-Heavy', '#c4a957', shipType, fontWidth(shipType, 28), 62)
	};

	function fontCheck(id) {
		if (id == 'shipNameText') {
			albumStatusData[imgData.level]['albumStatusName'] = id.value
		} else if (id == 'shipClassText') {
			log['font']['shipClass'] = id.value
		} else if (id == 'shipTypeText') {
			log['font']['shipType'] = id.value
		};
		rectCanvas();
	};

	function rectFont() {
		createFont(dom.fnv.value, dom.fvi.value, dom.fcv.value, dom.ftv.value);
	};

	function rectCanvas() {
		ctx.clearRect(0, 0, cas.width, cas.height);
		rectFont();
	};

	function fontSizeControl(p) {
		let a = document.getElementById("fri");
		let b = document.getElementById("fvi");
		if (b.value > 58 || a.value > 58 || b.value < 0 || a.value < 0) {
			a.value = 58;
			b.value = 58;
			albumStatusData[imgData.level]['albumStatusSize'] = 58
		};
		let aa = parseFloat(a.value);
		let bb = parseFloat(b.value);
		if (p.id == 'fri') {
			albumStatusData[imgData.level]['albumStatusSize'] = b.value = aa
		} else if (p.id == 'fvi') {
			albumStatusData[imgData.level]['albumStatusSize'] = a.value = bb
		};
		rectCanvas();
	};
	var imgUrl;

	function saveImg(a) {
		imgUrl = cas.toDataURL({
			format: 'image/png',
			quality: 1
		});
		showOperation(a);
		if (page == 'album_status') {
			imgData[imgData.level][page] = imgUrl
		};
	};

	function showOperation(a) {
		createCanvas(a, "Show");
		const casS = document.getElementById(a + "ShowCanvas");
		const ctxS = casS.getContext("2d");
		var imgS = new Image();
		imgS.src = imgUrl;
		imgS.onload = function() {
			ctxS.drawImage(imgS, 0, 0, imgS.width, imgS.height)
		}
		casS.oncontextmenu = function(e) {
			e.preventDefault();
			delExportDiv(a + 'ShowDiv')
		};
	};

	function createCanvas(a, b) {
		const dcw = window.innerWidth;
		const dch = window.innerHeight;
		createElement({
			'dom': 'div',
			'appendDom': 'body',
			'id': a + 'ShowDiv',
			'className': ['export_div'],
			'style': {
				'width': dcw + 'px',
				'height': dch + 'px',
			},
			'setAttribute': {
				'onclick': 'delExportDiv("' + a + 'ShowDiv")'
			}
		});
		createElement({
			'dom': 'canvas',
			'appendId': [a + 'ShowDiv'],
			'id': a + b + 'Canvas',
			'className': [a + '-middle-canvas', 'middle-canvas'],
			'style': {
				'marginTop': (dch - casH) / 2 + 'px'
			},
			'setAttribute': {
				'width': casW + 'px',
				'height': casH + 'px'
			}
		});
		createElement({
			'dom': 'p',
			'appendId': [a + b + 'Canvas'],
			'className': ['canvas-error-text-p'],
			'innerHTML': canvasErrorText[0] + canvasErrorText[1] +
				"<a href='https://www.google.cn/intl/zh-CN/chrome/'>GoogleChrome</a>"
		});
	};

	function downLoadImg() {
		var urlData = imgUrl;
		const element = document.createElement("a");
		element.download = page;
		element.href = urlData;
		document.body.appendChild(element);
		element.click();
		element.remove();
	}! function() {
		document.getElementById("fri").oninput = function() {
			fontSizeControl(this)
		};
		document.getElementById("fvi").oninput = function() {
			fontSizeControl(this)
		};
		document.getElementById("shipNameText").oninput = function() {
			fontCheck(this)
		};
		document.getElementById("shipClassText").oninput = function() {
			fontCheck(this)
		};
		document.getElementById("shipTypeText").oninput = function() {
			fontCheck(this)
		};
		if (document.getElementById("save")) {
			document.getElementById("save").onclick = function() {
				saveImg(page)
			};
		};
		if (document.getElementById("download")) {
			document.getElementById("download").onclick = function() {
				downLoadImg()
			};
		};
		var levelSelect = document.getElementsByName('level');
		for (i = 0; i < levelSelect.length; i++) {
			document.getElementsByName('level')[i].onclick = function() {
				imgData.level = this.id;
				if (page == 'album_status') {
					if (imgDataN != undefined && imgData[imgData.level].full == undefined) {
						switchPageFun('full');
						return
					} else if (imgDataD != undefined && imgData[imgData.level].full_dmg == undefined) {
						switchPageFun('full');
						return
					};
				};
				dom.fnv.value = albumStatusData[imgData.level]['albumStatusName'];
				dom.fri.value = albumStatusData[imgData.level]['albumStatusSize'];
				dom.fvi.value = albumStatusData[imgData.level]['albumStatusSize'];
				rectCanvas();
			};
		};
	}();
	! function() {
		dom.fri.value = albumStatusData[imgData.level]['albumStatusSize'];
		dom.fvi.value = albumStatusData[imgData.level]['albumStatusSize'];
		rectCanvas();
	}();
};

function canvasPositionPage(page, lang, local) {
	var imgDataN = imgData[imgData.level].full;
	var imgDataD = imgData[imgData.level].full_dmg;
	var imgDataNx2 = imgData[imgData.level].character_full;
	var imgDataDx2 = imgData[imgData.level].character_full_dmg;
	createElement({
		'dom': 'div',
		'appendId': ['content'],
		'id': page + 'Page',
		'className': [page + '-page-div']
	});
	createElement({
		'dom': 'h1',
		'appendId': [page + 'Page'],
		'className': [page + '-page-text-title', 'page-text-title'],
		'innerHTML': pageTitleText[10]
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'LeftDiv',
		'className': [page + '-left-div', 'left-div']
	});
	createElement({
		'dom': 'h2',
		'appendId': [page + 'LeftDiv'],
		'innerHTML': pageSettingText[2]
	});
	const dataState = dataVal.state;
	const dataScene = dataVal.positionDom.scene;
	const pnl = dataVal.positionDom.pnl;
	const pnt = dataVal.positionDom.pnt;
	const StateL = dataScene.length * 2 - 1;
	for (let i = 0; i < StateL; i++) {
		var l = (i - i % 2) / 2;
		var k = i % 2;
		if (imgDataN != undefined && imgDataD != undefined) {
			judgementCharacter()
		} else if (imgDataN != undefined && imgDataD == undefined && dataState[k] == 'normal') {
			judgementCharacter()
		} else if (imgDataN == undefined && imgDataD != undefined && dataState[k] == 'damage') {
			judgementCharacter()
		};

		function judgementCharacter() {
			if (imgDataNx2 != undefined && imgDataDx2 != undefined) {
				createInputFun()
			} else if (imgDataNx2 != undefined && imgDataDx2 == undefined && dataState[k] == 'normal' && dataScene[l] ==
				'kaisyu') {
				createInputFun()
			} else if (imgDataNx2 == undefined && imgDataDx2 != undefined && dataState[k] == 'damage' && dataScene[l] ==
				'kaisyu') {
				createInputFun()
			} else if (dataScene[l] != 'kaisyu') {
				createInputFun()
			}
		};

		function createInputFun() {
			createElement({
				'dom': 'span',
				'appendId': [page + 'LeftDiv'],
				'innerHTML': positionText.scene[l] + textVal.state[k]
			});
			createElement({
				'dom': 'input',
				'appendId': [page + 'LeftDiv'],
				'name': 'position',
				'type': 'radio',
				'setAttribute': {
					'state': dataState[k],
					'scene': dataScene[l]
				}
			});
			createElement({
				'dom': 'br',
				'appendId': [page + 'LeftDiv']
			});
			createElement({
				'dom': 'input',
				'appendId': [page + 'LeftDiv'],
				'id': dataScene[l] + positionMaterial.iniState[k] + '_l',
				'className': ['input_text'],
				'name': 'left',
				'type': 'number',
				'value': log[page][dataScene[l]][dataState[k]].x.toString(),
				'maxLength': '5',
				'setAttribute': {
					'placeholder': settingRightText[13],
					'onmousewheel': ''
				}
			});
			createElement({
				'dom': 'input',
				'appendId': [page + 'LeftDiv'],
				'id': dataScene[l] + positionMaterial.iniState[k] + '_t',
				'className': ['input_text'],
				'name': 'top',
				'type': 'number',
				'value': log[page][dataScene[l]][dataState[k]].y.toString(),
				'maxLength': '5',
				'setAttribute': {
					'placeholder': settingRightText[13],
					'onmousewheel': ''
				}
			});
			createElement({
				'dom': 'br',
				'appendId': [page + 'LeftDiv']
			})
		}
	};
	document.getElementById(page + 'LeftDiv').children[2].checked = true;
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'MiddleDiv',
		'className': [page + '-middle-div', 'middle-div']
	});
	createElement({
		'dom': 'canvas',
		'appendId': [page + 'MiddleDiv'],
		'id': page + 'Canvas',
		'className': [page + '-middle-canvas', 'middle-canvas']
	});
	createElement({
		'dom': 'p',
		'appendId': [page + 'Canvas'],
		'className': ['canvas-error-text-p'],
		'innerHTML': canvasErrorText[0] + canvasErrorText[1] +
			"<a href='https://www.google.cn/intl/zh-CN/chrome/'>GoogleChrome</a>"
	});
	createElement({
		'dom': 'div',
		'appendId': [page + 'Page'],
		'id': page + 'RightDiv',
		'className': [page + '-right-div', 'right-div']
	});
	createElement({
		'dom': 'h2',
		'appendId': [page + 'RightDiv'],
		'innerHTML': pageSettingText[2]
	});
	createElement({
		'dom': 'h3',
		'appendId': [page + 'RightDiv'],
		'innerHTML': settingRightText[11] + settingRightText[16]
	});
	createElement({
		'dom': 'input',
		'appendId': [page + 'RightDiv'],
		'id': 'savePositon',
		'className': ['save-position'],
		'name': 'save',
		'type': 'button',
		'value': settingRightText[11]
	});
	const cas = document.getElementById(page + "Canvas");
	const ctx = cas.getContext("2d");
	const casW = 1200;
	const casH = 720;
	cas.setAttribute('width', casW);
	cas.setAttribute('height', casH);
	const canvasDiv = document.getElementById(page + "MiddleDiv");
	canvasDiv.style.width = casW + 2 + 'px';
	const leftWidth = 800 - (casW / 2 + 200);
	document.getElementById(page + "LeftDiv").style.marginLeft = leftWidth + 'px';
	var state = 'normal';
	var stateVal = '_n';
	var scene = 'boko';
	var x = 0;
	var y = 0;
	var img = new Image();
	img.onload = function() {
		img[state].w = img.width * (100 * 0.01);
		img[state].h = img.height * (100 * 0.01);
		rectImg()
	};
	! function() {
		let id = {};
		id.background = positionMaterial.iniScene;
		id.cover = positionMaterial.iniScene;
		for (i in id) {
			let str = imgStrSub(i);
			window[str] = new Image();
			window[str].onload = function() {
				rectImg()
			}
		};
	}();

	function imgStrSub(a) {
		let strA = a;
		let strB = strA.substring(1);
		strA = strA.substring(0, 1);
		strA = strA.toUpperCase();
		let str = 'img' + strA + strB;
		return str
	};

	function controlState(a) {
		scene = a.getAttribute('scene');
		imgBackground.src = local + '/position/' + scene + '_bg.png';
		imgCover.src = local + '/position/' + scene + '_cr.png';
		state = a.getAttribute('state');
		if (state == 'normal') {
			if (scene != 'kaisyu') {
				img.src = imgDataN
			} else {
				img.src = imgDataNx2
			};
			stateVal = '_n'
		} else if (state == 'damage') {
			if (scene != 'kaisyu') {
				img.src = imgDataD
			} else {
				img.src = imgDataDx2
			};
			stateVal = '_d'
		}
	};

	function checkInput(p) {
		let a = p.id.substring(0, p.id.indexOf("_"));
		let b = p.id.substring(p.id.indexOf("_") + 1, p.id.lastIndexOf("_"));
		if (b == 'n') {
			b = 'normal'
		} else if (b == 'd') {
			b = 'damage'
		};
		const textcheck = /[^\d\-]/g;
		if (textcheck.test(p.value)) {
			p.value = '';
			return false
		};
		if (p.name == 'left') {
			log[page][a][b].x = p.value * 1
		} else if (p.name == 'top') {
			log[page][a][b].y = p.value * 1
		};
		rectImg()
	};

	function rectImg() {
		ctx.clearRect(0, 0, cas.width, cas.height);
		ctx.drawImage(imgBackground, 0, 0, imgBackground.width, imgBackground.height);
		ctx.drawImage(img, log[page][scene][state].x + pnl[scene], log[page][scene][state].y + pnt[scene], img[state].w, img[
			state].h);
		ctx.drawImage(imgCover, 0, 0, imgCover.width, imgCover.height)
	};
	! function() {
		cas.onmousedown = function(e) {
			let xd, yd, xm, ym;
			xm = e.clientX;
			ym = e.clientY;
			xd = xm - log[page][scene][state].x;
			yd = ym - log[page][scene][state].y;
			cas.onmousemove = function(e) {
				xm = e.clientX;
				ym = e.clientY;
				log[page][scene][state].x = xm - xd;
				log[page][scene][state].y = ym - yd;
				echo();
				rectImg()
			};
			cas.onmouseup = function() {
				cas.onmousemove = null;
				cas.onmouseup = null
			}
		};
		document.onkeydown = function(ev, show) {
			let oEvent = ev || event;
			if (oEvent.keyCode == 37) {
				log[page][scene][state].x = log[page][scene][state].x - 1;
				echo()
			} else if (oEvent.keyCode == 39) {
				log[page][scene][state].x = log[page][scene][state].x + 1;
				echo()
			} else if (oEvent.keyCode == 38) {
				log[page][scene][state].y = log[page][scene][state].y - 1;
				echo()
			} else if (oEvent.keyCode == 40) {
				log[page][scene][state].y = log[page][scene][state].y + 1;
				echo()
			};
			rectImg()
		};
		cas.oncontextmenu = function(e) {
			e.preventDefault()
		};

		function echo() {
			let mleft = log[page][scene][state].x;
			let mtop = log[page][scene][state].y;
			let iLeft = document.getElementById(scene + stateVal + '_l');
			let iTop = document.getElementById(scene + stateVal + '_t');
			if (scene == 'weda') {
				iLeft.value = -(mleft * 1);
				iTop.value = -(mtop * 1)
			} else {
				iLeft.value = mleft * 1;
				iTop.value = mtop * 1
			}
		};
	}();

	function exportPosition(id) {
		const dcw = window.innerWidth;
		const dch = window.innerHeight;
		createElement({
			'dom': 'div',
			'appendDom': 'body',
			'id': id,
			'className': ['export_div'],
			'style': {
				'width': dcw + 'px',
				'height': dch - 50 + 'px',
				'paddingTop': '50px'
			},
			'setAttribute': {
				'onclick': 'delExportDiv("' + id + '")'
			}
		});
		const iniScene = positionMaterial.iniScene;
		const iniState = positionMaterial.iniState;
		const iniPosition = positionMaterial.iniPosition;
		const iniWed = positionMaterial.iniWed;
		window.fVal = function(b) {
			if (b == '_n') {
				f = 'normal'
			} else if (b == '_d') {
				f = 'damage'
			};
			return f
		};

		function iniFun(id) {
			if (id == 'all') {
				id = 'ini'
			};
			for (i = 0; i < iniScene.length * 4; i++) {
				var f = (i - i % 4) / 4;
				var t = i % 2;
				var s = (i % 4 - i % 2) / 2;
				if (imgDataN != undefined && imgDataD != undefined) {
					checkIniCharacter()
				} else if (imgDataN != undefined && imgDataD == undefined && dataState[s] == 'normal') {
					checkIniCharacter()
				} else if (imgDataN == undefined && imgDataD != undefined && dataState[s] == 'damage') {
					checkIniCharacter()
				};

				function checkIniCharacter() {
					if ( dataState[s] == 'normal' && dataScene[f] == 'kaisyu') {
						checkIniPosition()
					} else if ( dataState[s] == 'damage' && dataScene[f] == 'kaisyu') {
						checkIniPosition()
					} else if (dataScene[f] != 'kaisyu') {
						checkIniPosition()
					}
				};

				function checkIniPosition() {
					if (iniPosition[t] == '_left') {
						echoIni(iniScene[f], iniState[s], iniPosition[t], iniWed[s], 'x');
					} else if (iniPosition[t] == '_top') {
						echoIni(iniScene[f], iniState[s], iniPosition[t], iniWed[s], 'y');
					}
				};
			};

			function echoIni(a, b, c, d, e) {
				const echoId = document.getElementById(id);
				var f = fVal(b);
				if (a == 'wed') {
					if (d != 'b') {
						echoId.innerHTML += '<p>' + a + d + c + '=' + -log[page][a + d]['normal'][e] + '</p>';
					}
				} else if (a == 'ensyuf') {
					echoId.innerHTML += '<p>' + a + b + c + '=' + log[page]['battle'][f][e] + '</p>';
				} else {
					echoId.innerHTML += '<p>' + a + b + c + '=' + log[page][a][f][e] + '</p>';
				}
			};
		};

		function jsonFun(id) {
			if (id == 'all') {
				id = 'json'
			};
			for (i = 0; i < iniScene.length * 2 - 1; i++) {
				var f = (i - i % 2) / 2;
				var s = i % 2;
				if (imgDataN != undefined && imgDataD != undefined) {
					checkJsonCharacter()
				} else if (imgDataN != undefined && imgDataD == undefined && dataState[s] == 'normal') {
					checkJsonCharacter()
				} else if (imgDataN == undefined && imgDataD != undefined && dataState[s] == 'damage') {
					checkJsonCharacter()
				};

				function checkJsonCharacter() {
					if (dataState[s] == 'normal' && dataScene[f] == 'kaisyu') {
						echoJson(iniScene[f], iniState[s], iniWed[s])
					} else if (dataState[s] == 'damage' && dataScene[f] == 'kaisyu') {
						echoJson(iniScene[f], iniState[s], iniWed[s])
					} else if (dataScene[f] != 'kaisyu') {
						echoJson(iniScene[f], iniState[s], iniWed[s])
					}
				};
			};

			function echoJson(a, b, c) {
				const echoId = document.getElementById(id);
				var f = fVal(b);
				if (a == 'ensyuf') {
					echoId.innerHTML += '<p>\"api_' + a + b + '\":[' + log[page]['battle'][f].x + ',' + log[page]['battle'][f].y +'],</p>';
				} else if (a == 'wed') {
					echoId.innerHTML += '<p>\"api_' + a + 'a\":[' + -log[page][a + 'a'][f].x + ',' + -log[page][a + 'a'][f].y +'],</p>';
				} else {
					echoId.innerHTML += '<p>\"api_' + a + b + '\":[' + log[page][a][f].x + ',' + log[page][a][f].y + '],</p>';
				}
			};
		};
		if (id == 'ini') {
			iniFun(id);
		} else if (id == 'json') {
			jsonFun(id);
		} else if (id == 'all') {
			createElement({
				'dom': 'div',
				'appendId': [id],
				'id': 'ini',
				'style': {
					'width': '45%',
					'text-align': 'right',
					'padding-right': '5%',
					'float': 'left'
				}
			});
			iniFun(id);
			imgData[imgData.level].position['ini'] = getText('ini');
			createElement({
				'dom': 'div',
				'appendId': [id],
				'id': 'json',
				'style': {
					'width': '45%',
					'text-align': 'left',
					'padding-left': '5%',
					'float': 'left'
				}
			});
			jsonFun(id);
			imgData[imgData.level].position['json'] = getText('json');
		};
	};
	window.getText = function(a) {
		let tl = document.getElementById(a).childNodes.length;
		let dataText = document.getElementById(a);
		let arrText = [];
		for (i = 0; i < tl; i++) {
			let saveText = dataText.getElementsByTagName("p")[i].innerHTML;
			if(a=='json'&&i==tl-1){
				saveText = saveText.replace(/(.*),/, '$1');
			}
			arrText.push(saveText);
		};
		if (a == 'ini') {
			strText = arrText.join("\r\n");
			strText = "[info]\r\nship_name=\r\ngetmes=\r\nsinfo=\r\n\r\n[graph]\r\n" + strText;
			return strText
		} else if (a == 'json') {
			strText = arrText.join("\r\n    ");
			console.log(strText);
			strL =
				'{\r\n  "api_mst_ship":{\r\n    "api_name":false,\r\n    "api_getmes":false,\r\n    "api_sinfo":false\r\n  },\r\n  "api_mst_shipgraph":{\r\n    ';
			strR = '\r\n  }\r\n}\r\n';
			strText = strL + strText + strR;
			return strText
		}
	};
	window.downloadExport = function(filename, text) {
		const element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element)
	};
	! function() {
		var inputRadioDom = document.getElementsByName('position');
		for (i = 0; i < inputRadioDom.length; i++) {
			document.getElementsByName('position')[i].onclick = function() {
				controlState(this)
			}
		};
		var inputTextDom = document.getElementsByClassName('input_text');
		for (i = 0; i < inputTextDom.length; i++) {
			document.getElementsByClassName('input_text')[i].oninput = function() {
				checkInput(this)
			}
		};
		document.getElementsByClassName('save-position')[0].onclick = function() {
			exportPosition('all')
		};
		var levelSelect = document.getElementsByName('level');
		for (i = 0; i < levelSelect.length; i++) {
			document.getElementsByName('level')[i].onclick = function() {
				imgData.level = this.id;
				if (page == 'position') {
					if (imgDataN != undefined && imgData[imgData.level].full == undefined) {
						switchPageFun('full');
						return
					} else if (imgDataD != undefined && imgData[imgData.level].full_dmg == undefined) {
						switchPageFun('full');
						return
					}
				};
				if (imgDataN != undefined) {
					img.src = imgDataN;
					state = 'normal';
					stateVal = '_n';
					scene = 'boko';
					document.getElementById(page + 'LeftDiv').children[2].checked = true
				};
				imgBackground.src = local + '/position/boko_bg.png';
				imgCover.src = local + '/position/boko_cr.png';
				rectImg();
			}
		};
	}();
	! function() {
		if (imgDataN != undefined) {
			img.src = imgDataN;
			state = 'normal';
			stateVal = '_n'
		} else if (imgDataN == undefined && imgDataD != undefined) {
			img.src = imgDataD;
			state = 'damage';
			stateVal = '_d'
		};
		let s = dataState;
		let c = dataScene;
		for (let i = 0; i < s.length; i++) {
			img[s[i]] = {};
			img[s[i]].angle = 0;
			img[s[i]].size = 100;
			for (let j = 0; j < c.length; j++) {
				img[s[i]][c[j]] = {};
				img[s[i]][c[j]].x = log[page][c[j]][s[i]]['left'];
				img[s[i]][c[j]].y = log[page][c[j]][s[i]]['top']
			}
		};
		imgBackground.src = local + '/position/boko_bg.png';
		imgCover.src = local + '/position/boko_cr.png';
	}()
};
window.shipData;
window.jsonData;
var pageNow = undefined;
var uploadNow = undefined;
WebFont.load({
	custom: {
		families: ['A-OTF-RyuminPro-Heavy', 'Vani']
	}
});
var _LoadingHtml = '<div id="loadingDiv" style="position:absolute; top:0; left:0; width:' + window.innerWidth +
	'px; height:' + window.innerHeight +
	'px; background: #282828 url(./img/loading/kancolle_loading.gif) no-repeat fixed center; z-index:999; "></div>';
document.write(_LoadingHtml);
document.onreadystatechange = completeLoading;

function completeLoading() {
	if (document.readyState == "complete") {
		var loadingMask = document.getElementById('loadingDiv');
		loadingMask.remove();
		getShipData()
	}
};

function getShipData() {
	var jsonUrl = "./json/lastJsonData.json";
	var request = new XMLHttpRequest();
	request.open("get", jsonUrl);
	request.send(null);
	request.onload = function() {
		if (request.status == 200) {
			shipData = JSON.parse(request.responseText);
			getJsonData(shipData)
		}
	};
};

function getJsonData(shipData) {
	var jsonUrl = "./json/allPage.json";
	var request = new XMLHttpRequest();
	request.open("get", jsonUrl);
	request.send(null);
	request.onload = function() {
		if (request.status == 200) {
			jsonData = JSON.parse(request.responseText);
			createElement({
				'dom': 'select',
				'appendDom': 'body',
				'id': 'languageSelect',
				'className': ['language-select'],
				'option': jsonData.language,
			});
			document.getElementById('languageSelect').onchange = function() {
				var index = this.selectedIndex;
				var value = this.options[index].text;
				for (i in jsonData.language) {
					if (value == jsonData.language[i]) {
						language = i;
						window.textVal = jsonData['text_' + language]
					}
				};
				if (document.getElementById('main')) {
					for (i = 0; i < dataPage.length; i++) {
						if (document.getElementsByClassName(dataPage[i] + '-page-select-text-span')[0]) {
							document.getElementsByClassName(dataPage[i] + '-page-select-text-span')[0].innerHTML = textVal['page'][i]
						}
					};
					switchPageFun(pageNow)
				};
				definedJsVal();
				if (document.getElementById('upLoadMain')) {
					if (uploadNow == undefined) {
						uploadNow = 'x1'
					};
					document.getElementById('upLoadMain').remove();
					createUploadPage(uploadNow)
				};
				if (document.getElementById('level')) {
					createLevel()
				}
			};
			window.imgData = {};
			window.albumStatusData = {};
			imgData.level = undefined;
			window.uploadData = {};
			window.language = 'cn';
			window.localtion = './img';
			definedJsVal();
			if (uploadNow == undefined) {
				uploadNow = 'x1';
				createUploadPage(uploadNow)
			}
		};
	}
};
window.definedJsVal = function() {
	window.dataVal = jsonData['text_val'];
	window.textVal = jsonData['text_' + language];
	window.dataPage = dataVal.page;
	window.textPage = textVal.page;
	window.pageTitleText = textVal.pageTitle;
	window.pageSettingText = textVal.pageSetting;
	window.uploadTitleText = textVal.uploadTitle;
	window.uploadBottomText = textVal.uploadBottom;
	window.checkImgText = textVal.checkImg;
	window.settingLeftText = textVal.settingLeft;
	window.settingRightText = textVal.settingRight;
	window.canvasErrorText = textVal.settingMiddle;
	for (i = 0; i < dataPage.length; i++) {
		if (dataVal[dataPage[i] + 'Material'] != undefined) {
			window[dataPage[i] + 'Material'] = dataVal[dataPage[i] + 'Material']
		} else {
			window['material'] = dataVal['material']
		};
		if (dataPage[i] == 'card') {
			window[dataPage[i] + 'FontBg'] = dataVal[dataPage[i] + 'FontBg']
		};
		if (textVal[dataPage[i] + 'Text'] != undefined) {
			window[dataPage[i] + 'Text'] = textVal[dataPage[i] + 'Text']
		} else {
			window['materialText'] = textVal['materialText']
		}
	};
};
window.definedLogVal = function() {
	window.log = {};
	for (let i = 0; i < dataPage.length; i++) {
		log[dataPage[i]] = {};
		log[dataPage[i]].state = undefined;
		if (dataPage[i] != 'position') {
			for (let j = 0; j < dataVal.state.length; j++) {
				log[dataPage[i]][dataVal.state[j]] = {};
				log[dataPage[i]][dataVal.state[j]].x = 0;
				log[dataPage[i]][dataVal.state[j]].y = 0;
				log[dataPage[i]][dataVal.state[j]].size = 100;
				log[dataPage[i]][dataVal.state[j]].angle = 0
			}
		};
		if (dataPage[i] == 'full' || dataPage[i] == 'full_x2') {
			log[dataPage[i]]['room'] = 1;
			log[dataPage[i]]['ui'] = 1
		};
		if (dataPage[i] == 'card' || dataPage[i] == 'banner' || dataPage[i] == 'supply_character') {
			log['material'] = {};
			log['material']['shipType'] = 0;
			log['material']['rare'] = 8;
			log['material']['badge'] = 2;
			log['material']['texture'] = 0;
			log['material']['texturePosition'] = 1;
			log['material']['fall'] = 0;
			log['material']['fontStyle'] = 'none';
			log['material']['fontCutH'] = 0;
			log['material']['fontKanaH'] = 0;
			log['material']['fontLogo'] = {};
			log['material']['fontLogo']['kai'] = 0;
			log['material']['fontLogo']['kaini'] = 0;
			log['material']['fontLogo']['size'] = '100'
		};
		if (dataPage[i] == 'card' || dataPage[i] == 'album_status') {
			log['font'] = {};
			log['font']['shipName'] = '艦名';
			log['font']['shipKana'] = 'なまえ';
			log['font']['shipClass'] = '所屬艦一番艦';
			log['font']['shipType'] = '艦種類'
		};
		if (dataPage[i] == 'position') {
			let dataState = dataVal.state;
			let dataScene = dataVal.positionDom.scene;
			let SceneL = dataScene.length;
			for (let j = 0; j < SceneL; j++) {
				log[dataPage[i]][dataScene[j]] = {};
				for (let n = 0; n < dataState.length; n++) {
					log[dataPage[i]][dataScene[j]][dataState[n]] = {};
					log[dataPage[i]][dataScene[j]][dataState[n]].x = 0;
					log[dataPage[i]][dataScene[j]][dataState[n]].y = 0
				}
			};
		}
	};
};

function createUploadPage(now, shipId) {
	let tittle;
	let uploadTextN = settingRightText[1] + ' - ' + uploadBottomText[0];
	let uploadTextD = settingRightText[2] + ' - ' + uploadBottomText[0];
	const shipSelectText = uploadBottomText[1];
	const shipSearchText = uploadBottomText[5];
	const pleaseSelectText = uploadBottomText[2];
	const pleaseSearchText = uploadBottomText[6];
	const waifu2xText = textVal.waifu2x;
	const notChoice = uploadBottomText[4];
	if (now == 'x1') {
		tittle = uploadTitleText[0]
	} else if (now == 'x2') {
		tittle = uploadTitleText[1]
	} else if (now == 'sp') {
		tittle = uploadTitleText[2];
		uploadTextN = textPage[2] + ' - ' + uploadBottomText[0]
	};
	const nextBtnText = uploadBottomText[3];
	createElement({
		'dom': 'div',
		'appendDom': 'body',
		'id': 'upLoadMain',
		'className': ['upload-main-div']
	});
	createElement({
		'dom': 'h1',
		'appendId': ['upLoadMain'],
		'className': ['upload-main-title'],
		'innerHTML': tittle
	});
	if (now == 'x1') {
		createElement({
			'dom': 'div',
			'appendId': ['upLoadMain'],
			'id': 'shipSelectDiv',
			'className': ['ship-select-div']
		});
		createElement({
			'dom': 'span',
			'appendId': ['shipSelectDiv'],
			'className': ['ship-select-title'],
			'innerHTML': shipSelectText + '：'
		});
		var shipSelectInfo = [pleaseSelectText];
		var shipAllInfo = [];
		var enemySelectInfo = [];
		var enemyAllInfo = [];
		var enemyNameInfo = [];
		var enemyRepe = 0;
		for (i = 0; i < shipData.length; i++) {
			if (shipData[i].pid == 0 && shipData[i].cid != null) {
				shipSelectInfo.push(shipData[i].id + ' ' + shipData[i].name + ' ' + shipData[i].yomi);
				shipAllInfo.push({
					0: shipData[i].id,
					1: shipData[i].cid,
				})
			} else if (shipData[i].pid == 0 && shipData[i].cid == null) {
				if (enemySelectInfo.length == 0 || enemyNameInfo[enemyNameInfo.length - 1].name != shipData[i].name) {
					enemyNameInfo.push({
						'name': shipData[i].name
					});
					enemyAllInfo.push({
						0: shipData[i].id
					});
					enemySelectInfo.push(shipData[i].id + ' ' + shipData[i].name);
					enemyRepe = 0
				} else {
					enemyRepe++;
					enemyAllInfo[enemyAllInfo.length - 1][enemyRepe] = shipData[i].id
				};
			};
		};
		shipSelectInfo = shipSelectInfo.concat(enemySelectInfo);
		for (i = 0; i < shipData.length; i++) {
			for (j = 0; j < shipAllInfo.length; j++) {
				for (n in shipAllInfo[j]) {
					if (shipData[i].pid == shipAllInfo[j][n]) {
						shipAllInfo[j][n * 1 + 1] = shipData[i].id;
						if (shipData[i].cid != 0 && shipData[i].cid != shipData[i].pid) {
							shipAllInfo[j][n * 1 + 2] = shipData[i].cid
						};
					};
				};
			};
		};
		for (i = 0; i < shipAllInfo.length; i++){
			for (n in shipAllInfo[i]){
				let l = 0;
				for (m in shipAllInfo[i]){
					if(shipAllInfo[i][n] == shipAllInfo[i][m]){
						if(l==1){
							delete shipAllInfo[i][m];
							l=0;
						};
						l++;
					};
				};
			};
		};
		shipAllInfo = shipAllInfo.concat(enemyAllInfo);
		createElement({
			'dom': 'select',
			'appendId': ['shipSelectDiv'],
			'id': 'shipSelect',
			'className': ['ship-select'],
			'option': shipSelectInfo
		});
		createElement({
			'dom': 'div',
			'appendId': ['shipSelectDiv'],
			'id': 'shipSearchDiv',
			'className': ['ship-search-div']
		});
		createElement({
			'dom': 'span',
			'appendId': ['shipSearchDiv'],
			'className': ['ship-search-title'],
			'innerHTML': shipSearchText + '：'
		});
		createElement({
			'dom': 'input',
			'appendId': ['shipSearchDiv'],
			'id': 'shipSearch',
			'className': ['ship-search'],
			'setAttribute':{
				'placeholder': pleaseSearchText
			}
		});
		createElement({
			'dom': 'br',
			'appendId': ['shipSelectDiv']
		});
		document.getElementById('shipSelect').onchange = function() {
			imgData.shipInfo = [];
			var index = this.selectedIndex;
			var value = this.options[index].text;
			if (index > 0) {
				document.getElementById('shipSearch').value = value;
				document.getElementById('shipSelect').value = value;
				createShipSelectInput(value);
			}
		}
		document.getElementById('shipSearch').oninput = function() {
			imgData.shipInfo = [];
			if(document.getElementById('showSearchInfoDiv')){
				document.getElementById('showSearchInfoDiv').remove();
			}
			var str = this.value;
			if(str.length!=0&&str!=' '){
				createElement({
					'dom': 'div',
					'appendId': ['shipSearchDiv'],
					'id': 'showSearchInfoDiv',
					'className': ['show-search-info-div']
				});
				for (i = 0; i < shipSelectInfo.length; i++) {
					var shipInfo = shipSelectInfo[i];
					if(shipInfo.search(str) != -1 ){
						createElement({
							'dom': 'div',
							'appendId': ['showSearchInfoDiv'],
							'className': ['show-search-info'],
							'innerHTML' : shipInfo
						});
					}
				}
				if(document.getElementById('showSearchInfoDiv')){
					document.getElementById('showSearchInfoDiv').onmouseover = function(){
						let n = document.getElementById('showSearchInfoDiv').children.length;
						for(let i=0;i<n;i++){
							document.getElementsByClassName('show-search-info')[i].onclick = function(){
								var value = this.innerHTML;
								var isNumber = value.substring(0,1);
								if(/^[0-9]+$/.test(isNumber)){
									document.getElementById('shipSearch').value = value;
									document.getElementById('shipSelect').value = value;
									createShipSelectInput(value);
									document.getElementById('showSearchInfoDiv').remove();
								}
							}
						}
					}
				}
				document.addEventListener("click",function(){
					if(document.getElementById('showSearchInfoDiv')){
						document.getElementById('showSearchInfoDiv').remove();
					}
				});
				document.getElementById('showSearchInfoDiv').addEventListener("click",function(event){
					event=event||window.event;
					event.stopPropagation();
				});
			}
		}
		function createShipSelectInput(value){
			var vid = value.substring(0,value.indexOf(" "));
			var aid = value.substring(value.indexOf(" ")+1);
			var nid = aid.substring(0,aid.lastIndexOf(" "));
			var yid = aid.substring(aid.lastIndexOf(" ")+1);
			window.shipName = {};
			shipName.name = nid;
			shipName.yomi = yid;
			if (document.getElementById('shipSelectInput')) {
				document.getElementById('shipSelectInput').remove()
			};
			createElement({
				'dom': 'div',
				'appendId': ['shipSelectDiv'],
				'id': 'shipSelectInput',
				'className': ['ship-select-input']
			});
			for (i = 0; i < shipAllInfo.length; i++) {
				if (shipAllInfo[i][0] == vid) {
					for (j = 0; j < shipData.length; j++) {
						for (n in shipAllInfo[i]) {
							if (shipData[j].id == shipAllInfo[i][n]) {
								imgData.shipInfo.push({
									'id': shipData[j].id,
									'name': shipData[j].name,
									'yomi': shipData[j].yomi
								});
								createElement({
									'dom': 'input',
									'appendId': ['shipSelectInput'],
									'id': shipData[j].id,
									'className': ['level-checkbox'],
									'name': 'level-checkbox',
									'type': 'checkbox'
								});
								document.getElementById(shipData[j].id).checked = true;
								if (shipData[j].yomi) {
									createElement({
										'dom': 'span',
										'appendId': ['shipSelectInput'],
										'innerHTML': shipData[j].id + '：' + shipData[j].name + '（' + shipData[j].yomi + '）'
									})
								} else {
									createElement({
										'dom': 'span',
										'appendId': ['shipSelectInput'],
										'innerHTML': shipData[j].id + '：' + shipData[j].name
									})
								}
							};
						}
					};
				}
			};
			! function() {
				var checkbox = document.getElementsByName('level-checkbox');
				window.shipInfoAll = imgData.shipInfo;
				window.shipInfoCheck = imgData.shipInfo;
				for (i = 0; i < checkbox.length; i++) {
					checkbox[i].onclick = function() {
						shipInfoCheck = [];
						for (j = 0; j < checkbox.length; j++) {
							if (checkbox[j].checked) {
								shipInfoCheck.push(shipInfoAll[j]);
							}
						};
						if (shipInfoCheck.length == 0) {
							shipInfoCheck = undefined;
							alert(uploadBottomText[4]);
							location.reload();
						} else {
							imgData.shipInfo = shipInfoCheck;
						};
						definedImgData();
						if (document.getElementById('imgNormal')) {
							document.getElementById('imgNormal').value = ''
						};
						if (document.getElementById('imgDamage')) {
							document.getElementById('imgDamage').value = ''
						};
						if (document.getElementById('showimgNormal')) {
							document.getElementById('showimgNormal').remove()
						};
						if (document.getElementById('showimgDamage')) {
							document.getElementById('showimgDamage').remove()
						}
					};
				}
			}();
			definedImgData();
			if (document.getElementById('imgMainDiv')) {
				document.getElementById('imgMainDiv').remove()
			};

			function definedImgData() {
				for (i = 0; i < imgData.shipInfo.length; i++) {
					imgData[imgData.shipInfo[i]['id']] = {};
					imgData[imgData.shipInfo[i]['id']]['id'] = imgData.shipInfo[i]['id'];
					imgData[imgData.shipInfo[i]['id']]['name'] = imgData.shipInfo[i]['name'];
					imgData[imgData.shipInfo[i]['id']]['yomi'] = imgData.shipInfo[i]['yomi'];
					imgData[imgData.shipInfo[i]['id']].position = {}
					albumStatusData[ imgData.shipInfo[i]['id'] ] = {};
					albumStatusData[ imgData.shipInfo[i]['id'] ]['albumStatusName'] = imgData.shipInfo[i]['name'];
					albumStatusData[ imgData.shipInfo[i]['id'] ]['albumStatusSize'] = 58;
				};
				imgData.level = imgData.shipInfo[0]['id'];
				imgData[imgData.level].orgN = undefined;
				imgData[imgData.level].orgD = undefined;
				imgData[imgData.level].orgNx2 = undefined;
				imgData[imgData.level].orgDx2 = undefined;
				imgData[imgData.level].orgNsp = undefined;
				imgData[imgData.level].full = undefined;
				imgData[imgData.level].full_dmg = undefined;
				imgData[imgData.level].full_x2 = undefined;
				imgData[imgData.level].full_x2_dmg = undefined;
				imgData[imgData.level].special = undefined;
				imgData[imgData.level].position.ini = undefined;
				imgData[imgData.level].position.json = undefined
			};
			createUpLoadDiv(vid);
		};
	} else {
		if (now == 'x2') {
			createElement({
				'dom': 'a',
				'appendId': ['upLoadMain'],
				'innerHTML': waifu2xText,
				'setAttribute': {
					'href': 'http://waifu2x.udp.jp/',
					'target': '_black'
				}
			})
		};
		createUpLoadDiv(shipId)
	};

	function createUpLoadDiv(id) {
		createElement({
			'dom': 'div',
			'appendId': ['upLoadMain'],
			'id': 'imgMainDiv',
			'className': ['img-main-div']
		});
		if (now == 'sp') {
			createElement({
				'dom': 'div',
				'appendId': ['imgMainDiv'],
				'id': 'imgNormalDiv',
				'className': ['img-normal-div', 'img-special-div']
			})
		} else {
			createElement({
				'dom': 'div',
				'appendId': ['imgMainDiv'],
				'id': 'imgNormalDiv',
				'className': ['img-normal-div', 'img-state-div']
			})
		};
		createElement({
			'dom': 'h2',
			'appendId': ['imgNormalDiv'],
			'innerHTML': uploadTextN
		});
		createElement({
			'dom': 'input',
			'appendId': ['imgNormalDiv'],
			'id': 'imgNormal',
			'name': 'file',
			'type': 'file',
			'setAttribute': {
				'accept': 'image/png'
			}
		});
		createElement({
			'dom': 'br',
			'appendId': ['imgNormalDiv']
		});
		if (now != 'sp') {
			createElement({
				'dom': 'div',
				'appendId': ['imgMainDiv'],
				'id': 'imgDamageDiv',
				'className': ['img-damage-div', 'img-state-div']
			});
			createElement({
				'dom': 'h2',
				'appendId': ['imgDamageDiv'],
				'innerHTML': uploadTextD
			});
			createElement({
				'dom': 'input',
				'appendId': ['imgDamageDiv'],
				'id': 'imgDamage',
				'name': 'file',
				'type': 'file',
				'setAttribute': {
					'accept': 'image/png'
				}
			})
		};
		createElement({
			'dom': 'br',
			'appendId': ['imgNormalDiv']
		});
		if (document.getElementById('imgNormal')) {
			document.getElementById('imgNormal').onchange = function() {
				upLoadImg(this)
			}
		};
		if (document.getElementById('imgDamage')) {
			document.getElementById('imgDamage').onchange = function() {
				upLoadImg(this)
			}
		};

		function upLoadImg(inputDom) {
			const fileId = inputDom;
			if (fileId.files == undefined) {
				return
			};
			if (fileId.files.length != 1) {
				return
			};
			let files = fileId.files[0];
			if (files.size < 1024) {
				return
			};
			let filesName = files.name;
			let FileType = filesName.substring(filesName.lastIndexOf(".") + 1).toLowerCase();
			if (FileType == 'png') {
				let imgReader = new FileReader();
				imgReader.readAsDataURL(files);
				imgReader.onload = function() {
					let imgResult = this.result;
					var imgId;
					for (i = 0; i < imgData.shipInfo.length; i++) {
						if (inputDom.id == 'imgNormal') {
							if (now == 'x1') {
								imgData[imgData.shipInfo[i]['id']].orgN = imgResult
							} else if (now == 'x2') {
								imgData[imgData.shipInfo[i]['id']].orgNx2 = imgResult
							} else if (now == 'sp') {
								imgData[imgData.shipInfo[i]['id']].orgNsp = imgResult
							};
							imgId = 'showimgNormal'
						} else if (inputDom.id == 'imgDamage') {
							if (now == 'x1') {
								imgData[imgData.shipInfo[i]['id']].orgD = imgResult
							} else if (now == 'x2') {
								imgData[imgData.shipInfo[i]['id']].orgDx2 = imgResult
							};
							imgId = 'showimgDamage'
						}
					};
					if (document.getElementById(imgId)) {
						document.getElementById(imgId).remove()
					};
					createElement({
						'dom': 'img',
						'appendId': [inputDom.id + 'Div'],
						'id': imgId,
						'className': ['show-img'],
						'setAttribute': {
							'src': imgResult
						},
					});
					if (now == 'x1') {
						createNextBtn(id)
					}
				};
			}
		};
		if (now == 'x2' || now == 'sp') {
			createNextBtn(id)
		}
	};

	function createNextBtn(id) {
		const btnId = document.getElementById('goNext');
		if (btnId) {
			btnId.remove()
		};
		createElement({
			'dom': 'button',
			'appendId': ['upLoadMain'],
			'id': 'goNext',
			'innerHTML': nextBtnText
		});
		document.getElementById('goNext').onclick = function() {
			document.getElementById('upLoadMain').remove();
			if (now == 'x1') {
				uploadNow = 'x2';
				createUploadPage(uploadNow, id)
			} else if (now == 'x2') {
				uploadNow = 'sp';
				createUploadPage(uploadNow, id)
			} else if (now == 'sp') {
				createAllPage()
			}
		};
	}
};

function createAllPage() {
	definedJsVal();
	definedLogVal();
	if (imgData[imgData.level].orgN == undefined && imgData[imgData.level].orgD == undefined) {
		return
	};
	if (imgData.shipInfo == undefined) {
		return
	};
	window.rect = {};
	for (i = 0; i < dataPage.length; i++) {
		rect[dataPage[i]] = {}
	};
	pageNow = dataPage[0];
	createElement({
		'dom': 'div',
		'appendDom': 'body',
		'id': 'main',
		'className': ['main-div']
	});
	createElement({
		'dom': 'div',
		'appendId': ['main'],
		'id': 'content',
		'className': ['content-div']
	});
	window.createMenuDiv = function(a) {
		createElement({
			'dom': 'div',
			'appendId': ['main'],
			'id': 'menu',
			'className': ['menu-div']
		});
		for (i = 0; i < a; i++) {
			if (dataPage[i] == 'full') {
				if (imgData[imgData.level].orgN != undefined || imgData[imgData.level].orgD != undefined) {
					createMenuInput()
				}
			} else if (dataPage[i] == 'full_x2') {
				if (imgData[imgData.level].orgNx2 != undefined || imgData[imgData.level].orgDx2 != undefined) {
					createMenuInput()
				}
			} else if (dataPage[i] == 'special') {
				if (imgData[imgData.level].orgNsp != undefined) {
					createMenuInput()
				}
			} else if (dataPage[i] == 'character_up') {
				if (imgData[imgData.level].full_x2 != undefined || imgData[imgData.level].full_x2_dmg != undefined) {
					createMenuInput()
				}
			} else if (dataPage[i] == 'remodel') {
				if (imgData[imgData.level].full_x2 != undefined || imgData[imgData.level].full_x2_dmg != undefined) {
					createMenuInput()
				}
			} else {
				if (imgData[imgData.level].full != undefined || imgData[imgData.level].full_dmg != undefined) {
					createMenuInput()
				}
			};

			function createMenuInput() {
				createElement({
					'dom': 'input',
					'appendId': ['menu'],
					'id': dataPage[i] + 'PageSelectInput',
					'name': 'pageSelect',
					'type': 'radio',
					'value': dataPage[i]
				});
				createElement({
					'dom': 'span',
					'appendId': ['menu'],
					'className': [dataPage[i] + '-page-select-text-span', 'page-select-text-span'],
					'innerHTML': textVal['page'][i]
				})
			}
		};
		document.getElementById('menu').children[0].checked = true;
		! function() {
			var pageSelect = document.getElementsByName('pageSelect');
			for (i = 0; i < pageSelect.length; i++) {
				document.getElementsByName('pageSelect')[i].onclick = function() {
					pageNow = this.value;
					switchPageFun(this.value)
				}
			};
		}()
	};
	window.createLevel = function() {
		if (document.getElementById('level')) {
			document.getElementById('level').remove()
		};
		const checkText = checkImgText[0];
		const saveAll = checkImgText[1];
		createElement({
			'dom': 'div',
			'appendId': ['main'],
			'id': 'level',
			'className': ['level-div']
		});
		for (i = 0; i < imgData.shipInfo.length; i++) {
			createElement({
				'dom': 'input',
				'appendId': ['level'],
				'id': imgData.shipInfo[i].id,
				'className': ['level-input'],
				'name': 'level',
				'type': 'radio',
				'value': imgData.shipInfo[i].name,
			});
			createElement({
				'dom': 'span',
				'appendId': ['level'],
				'innerHTML': imgData.shipInfo[i].id + ':' + imgData.shipInfo[i].name + '（' + imgData.shipInfo[i].yomi + '）'
			});
			createElement({
				'dom': 'input',
				'appendId': ['level'],
				'id': 'check_' + imgData.shipInfo[i].id,
				'className': ['check-input'],
				'name': imgData.shipInfo[i].id,
				'type': 'button',
				'value': checkText
			})
		};
		document.getElementById('level').children[0].checked = true;
		createElement({
			'dom': 'br',
			'appendId': ['level']
		});
		createElement({
			'dom': 'input',
			'appendId': ['level'],
			'id': 'saveAll',
			'className': ['save-input'],
			'type': 'button',
			'value': saveAll
		});
		! function() {
			var levelSelect = document.getElementsByName('level');
			for (i = 0; i < levelSelect.length; i++) {
				document.getElementsByName('level')[i].onclick = function() {
					imgData.level = this.id
				}
			};
		}();
		! function() {
			for (i = 0; i < imgData.shipInfo.length; i++) {
				document.getElementById('check_' + imgData.shipInfo[i]['id']).onclick = function() {
					checkMakeSave(this.name)
				}
			};
		}();
		! function() {
			document.getElementById('saveAll').onclick = function() {
				definedJsVal();
				const notSave = checkImgText[3];
				for (i = 0; i < imgData.shipInfo.length; i++) {
					if (imgData[imgData.shipInfo[i]['id']]['orgN'] != undefined && imgData[imgData.shipInfo[i]['id']]['full'] ==
						undefined || imgData[imgData.shipInfo[i]['id']]['orgD'] != undefined && imgData[imgData.shipInfo[i]['id']][
							'full_dmg'
						] == undefined) {
						if (imgData.shipInfo[i]['yomi']) {
							alert(imgData.shipInfo[i]['id'] + '：' + imgData.shipInfo[i]['name'] + '（' + imgData.shipInfo[i]['yomi'] +
								'）  ' + notSave)
						} else {
							alert(imgData.shipInfo[i]['id'] + '：' + imgData.shipInfo[i]['name'] + '  ' + notSave)
						}
					};
				};
				allMakeSave()
			}
		}()
	};
	createLevel();
	window.checkMakeSave = function(id) {
		const nowMake = checkImgText[2];
		const notSave = checkImgText[3];
		if (imgData[id]['full'] != undefined || imgData[id]['full_dmg'] != undefined) {
			a = document.getElementById('content').children[0].id;
			const dcw = window.innerWidth;
			const dch = window.innerHeight;
			createElement({
				'dom': 'div',
				'appendDom': 'body',
				'id': a + 'ShowDiv',
				'className': ['export_div'],
				'style': {
					'width': dcw + 'px',
					'height': dch + 'px',
					'text-align': 'left'
				},
				'setAttribute': {
					'onclick': 'delExportDiv("' + a + 'ShowDiv")'
				}
			});
			const divW = 220;
			let marginL = dcw / 2 - divW / 2;
			createElement({
				'dom': 'div',
				'appendId': [a + 'ShowDiv'],
				'id': 'id' + imgData.level,
				'style': {
					'width': divW + 'px',
					'float': 'left',
					'text-align': 'left',
					'margin-left': marginL + 'px'
				}
			});
			if (imgData[imgData.level]['yomi']) {
				createElement({
					'dom': 'p',
					'appendId': ['id' + imgData.level],
					'innerHTML': imgData[imgData.level]['id'] + '：' + imgData[imgData.level]['name'] + '（' + imgData[imgData.level]
						['yomi'] + '）'
				})
			} else {
				createElement({
					'dom': 'p',
					'appendId': ['id' + imgData.level],
					'innerHTML': imgData[imgData.level]['id'] + '：' + imgData[imgData.level]['name']
				})
			};
			createElement({
				'dom': 'p',
				'appendId': ['id' + imgData.level],
				'innerHTML': nowMake + '：'
			});
			var n = 1;
			for (i in imgData[id]) {
				if (i != 'id' && i != 'name' && i != 'yomi' && i != 'orgN' && i != 'orgD' && i != 'orgNx2' && i != 'orgDx2' && i !=
					'orgNsp') {
					if (imgData[id][i] && imgData[id][i] != undefined) {
						if (i == 'position' && imgData[id][i]['ini'] == undefined) {} else {
							createElement({
								'dom': 'p',
								'appendId': ['id' + imgData.level],
								'innerHTML': n + '：' + i
							});
							n++
						}
					};
				}
			};
		} else {
			for (i = 0; i < imgData.shipInfo.length; i++) {
				if (id == imgData.shipInfo[i]['id']) {
					if (imgData.shipInfo[i]['yomi']) {
						alert(imgData.shipInfo[i]['id'] + '：' + imgData.shipInfo[i]['name'] + '（' + imgData.shipInfo[i]['yomi'] + '）  ' +
							notSave)
					} else {
						alert(imgData.shipInfo[i]['id'] + '：' + imgData.shipInfo[i]['name'] + '  ' + notSave)
					}
				};
			}
		};
	};
	window.allMakeSave = function() {
		const nowMake = checkImgText[2];
		const downloadCahce = settingRightText[12];
		a = document.getElementById('content').children[0].id;
		const dcw = window.innerWidth;
		const dch = window.innerHeight;
		const divW = 220;
		createElement({
			'dom': 'div',
			'appendDom': 'body',
			'id': a + 'ShowDiv',
			'className': ['export_div'],
			'style': {
				'width': dcw + 'px',
				'height': dch + 'px',
			},
			'setAttribute': {
				'onclick': 'delExportDiv("' + a + 'ShowDiv")'
			}
		});
		for (i = 0; i < imgData.shipInfo.length; i++) {
			let level = imgData.shipInfo[i]['id'];
			createElement({
				'dom': 'div',
				'appendId': [a + 'ShowDiv'],
				'id': 'id' + level,
				'style': {
					'width': divW + 'px',
					'float': 'left',
					'text-align': 'left'
				}
			});
			if (i == 0) {
				let marginL = dcw / 2 - (divW * imgData.shipInfo.length) / 2;
				document.getElementById('id' + level).style.marginLeft = marginL + 'px'
			};
			if (imgData[level]['yomi']) {
				createElement({
					'dom': 'p',
					'appendId': ['id' + level],
					'innerHTML': imgData[level]['id'] + '：' + imgData[level]['name'] + '（' + imgData[level]['yomi'] + '）'
				})
			} else {
				createElement({
					'dom': 'p',
					'appendId': ['id' + level],
					'innerHTML': imgData[level]['id'] + '：' + imgData[level]['name']
				})
			};
			createElement({
				'dom': 'p',
				'appendId': ['id' + level],
				'innerHTML': nowMake + '：'
			});
			var n = 1;
			for (j in imgData[level]) {
				if (j != 'id' && j != 'name' && j != 'yomi' && j != 'orgN' && j != 'orgD' && j != 'orgNx2' && j != 'orgDx2' && j !=
					'orgNsp') {
					if (imgData[level][j] && imgData[level][j] != undefined) {
						if (j == 'position' && imgData[level][j]['ini'] == undefined) {} else {
							createElement({
								'dom': 'p',
								'appendId': ['id' + level],
								'innerHTML': n + '：' + j
							});
							n++
						}
					};
				}
			};
		};
		createElement({
			'dom': 'div',
			'appendId': [a + 'ShowDiv'],
			'id': 'downloadInput'
		});
		createElement({
			'dom': 'input',
			'appendId': ['downloadInput'],
			'className': ['export_div_button'],
			'type': 'button',
			'value': downloadCahce + '  cache.zip',
			'setAttribute': {
				'onclick': 'downloadCacheZip()'
			}
		});
		createElement({
			'dom': 'input',
			'appendId': ['downloadInput'],
			'className': ['export_div_button'],
			'type': 'button',
			'value': downloadCahce + '  bat.zip',
			'setAttribute': {
				'onclick': 'downloadBatZip()'
			}
		})
	};
	window.switchPageFun = function(id) {
		definedJsVal();
		const content = document.getElementById('content').children[0];
		const menu = document.getElementById('menu');
		if (content) {
			content.remove()
		};
		if (id == 'full') {
			if (menu) {
				menu.remove()
			};
			if (imgData[imgData.level].full == undefined && imgData[imgData.level].full_dmg == undefined) {
				createMenuDiv(3);
				definedLogVal()
			} else {
				createMenuDiv(dataPage.length)
			};
			canvasFullPage(id, language, localtion)
		} else if (id == 'full_x2') {
			canvasFullPage(id, language, localtion)
		} else if (id == 'special') {
			canvasFullPage(id, language, localtion)
		} else if (id == 'card') {
			canvasCardPage(id, language, localtion)
		} else if (id == 'banner') {
			canvasBannerPage(id, language, localtion)
		} else if (id == 'supply_character') {
			canvasSupplyCharacterPage(id, language, localtion)
		} else if (id == 'character_full') {
			canvasCharacterFeatherPage(id, language, localtion)
		} else if (id == 'character_up') {
			canvasCharacterFeatherPage(id, language, localtion)
		} else if (id == 'remodel') {
			canvasRemodelPage(id, language, localtion)
		} else if (id == 'album_status') {
			createElement({
				'dom':'div',
				'appendId':['content'],
				'id':id+'Page',
				'className':[id+'-page-div'],
				'style':{'backgroundColor':'#fff'}
			});
			createElement({
				'dom': 'iframe',
				'appendId': [id+'Page'],
				'setAttribute': {
					'width':'1600px',
					'height':'900px',
					'frameborder':'0',
					'src':'./404/index.html'
				}
			});
		} else if (id == 'position') {
			canvasPositionPage(id, language, localtion)
		};
	};
	switchPageFun(pageNow)
};
window.getTime = function() {
	let d = new Date();
	let t;

	function addZero(a) {
		if (a < 10) {
			return "0" + a;
		} else {
			return a;
		}
	};
	return t = d.getFullYear() + '-' + addZero(d.getMonth()+1) + '-' + addZero(d.getDate()) + ' ' + addZero(d.getHours()) +
		'.' + addZero(d.getMinutes()) + '.' + addZero(d.getSeconds());
};
window.downloadCacheZip = function() {
	var zip = new JSZip();
	var imgFolder = zip.folder("cache/kcs2/resources/ship/");
	var iniFolder = zip.folder("cache/kcs/resources/swf/ships/");
	var time = getTime();
	var cacheName = time + ' ';
	for (let i = 0; i < imgData.shipInfo.length; i++) {
		addBase(imgData.shipInfo[i].id);
		if (imgData[imgData.shipInfo[i].id].full != undefined) {
			cacheName += addZero(imgData.shipInfo[i].id) + ' ' + imgData.shipInfo[i].name + ' ';
		}
	};

	function addBase(lv) {
		for (i = 0; i < shipData.length; i++) {
			if (shipData[i].id == imgData[lv].id) {
				for (j in imgData[lv]) {
					if (j != 'position' && j != 'id' && j != 'name' && j != 'yomi' && imgData[lv][j] != undefined) {
						for (o in shipData[i]) {
							if (o == j) {
								let basedata = imgData[lv][j].substring(imgData[lv][j].indexOf(",") + 1);
								imgFolder.file(j + "/" + shipData[i][j] + '.hack.png', basedata, {
									base64: true
								});
							}
						};
					} else if (j == 'position' && imgData[lv].position.ini != undefined && imgData[lv].position.json != undefined) {
						for (l in imgData[lv][j]) {
							iniFolder.file(shipData[i].filename + '.config.' + l, imgData[lv][j][l]);
						}
					};
				}
			};
		}
	};
	zip.generateAsync({
		type: "blob"
	}).then(function(content) {
		saveAs(content, cacheName + "cache.zip");
	});
};
window.downloadBatZip = function() {
	var zip = new JSZip();
	var shipFolder = zip.folder("ship/");
	var time = getTime();
	var cacheName = time + ' ';
	for (let i = 0; i < imgData.shipInfo.length; i++) {
		addBase(imgData.shipInfo[i].id);
		if (imgData[imgData.shipInfo[i].id].full != undefined) {
			cacheName += addZero(imgData.shipInfo[i].id) + ' ' + imgData.shipInfo[i].name + ' ';
		}
	};

	function addBase(lv) {
		for (j in imgData[lv]) {
			if (j != 'position' && j != 'id' && j != 'name' && j != 'yomi' && j != 'orgN' && j != 'orgD' && j != 'orgNx2' && j !=
				'orgDx2' && j != 'orgNsp' && j != 'orgDsp' && imgData[lv][j] != undefined) {
				let basedata = imgData[lv][j].substring(imgData[lv][j].indexOf(",") + 1);
				shipFolder.file(addZero(imgData[lv]['id']) + '_' + imgData[lv]['name'] + '/' + j + '.png', basedata, {
					base64: true
				});
			} else if (j == 'position' && imgData[lv].position.ini != undefined && imgData[lv].position.json != undefined) {
				for(l in imgData[lv][j]){
					shipFolder.file( addZero(imgData[lv]['id']) + '_' + imgData[lv]['name'] + '/config.' + l, imgData[lv][j][l]);
				}//for
			}
		};
	};
	zip.generateAsync({
		type: "blob"
	}).then(function(content) {
		saveAs(content, cacheName + "bat.zip");
	});
};
window.addZero = function(id){
	if(id<1000&&id>=100){
		id = '0'+id;
	}else if(id<100&&id>=10){
		id = '00'+id;
	}else if(id<10&&id>=0){
		id = '000'+id;
	}return id;
}