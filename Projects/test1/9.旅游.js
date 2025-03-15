// ############# 路线渲染 ###################
let DataRoadimg = [{
	title: '推荐路线',
	titlespan: 'Recommended route',
	imgsrc: './images/ID.png',
	hoverdiv: '查看详细'
}, {
	title: '最热路线',
	titlespan: 'Latest route',
	imgsrc: './images/eye.png',
	hoverdiv: '查看详细'
}, {
	title: '国内路线',
	titlespan: 'Domestic route',
	imgsrc: './images/eye.png',
	hoverdiv: '查看详细'
}, {
	title: '国外路线',
	titlespan: 'Foreign route',
	imgsrc: './images/eye.png',
	hoverdiv: '查看详细'
}, {
	title: '自由行',
	titlespan: 'Independent travel',
	imgsrc: './images/eye.png',
	hoverdiv: '查看详细'
}]
const roadimg = document.querySelector('.roadimg');
for (let i = 0; i < DataRoadimg.length; i++) {
	const div = document.createElement('div');
	div.classList.add('item');
	if (i <= 1) {
		div.classList.add('animate__animated', 'animate__rotateInDownLeft', 'wow');
	} else if (i <= 2) {
		div.classList.add('around', 'wow');
	} else {
		div.classList.add('animate__animated', 'animate__rotateInDownRight', 'wow');
	}
	div.innerHTML = `
	        <div class="content">${DataRoadimg[i].title}<br><span>${DataRoadimg[i].titlespan}</span></div>
	        <div class="hoverContent">
	        	<img src="${DataRoadimg[i].imgsrc}" />
	        	<div>${DataRoadimg[i].hoverdiv}</div>
	        </div>
	`
	roadimg.appendChild(div);
}
// ############# 服务渲染 ###################
let FuwuData = [{
	titleh2: '定制规划',
	titleh6: '提供全新的定制旅游路线，让您更安心',
	imgCss: 'img1',
}, {
	titleh2: '全程服务',
	titleh6: '提供全新的定制旅游路线，让您更安心',
	imgCss: 'img2',
}, {
	titleh2: '个性选择',
	titleh6: '多条旅游路线供您选择，一站式服务提供',
	imgCss: 'img3',
}, {
	titleh2: '贴心管家',
	titleh6: '高级酒店、全程直飞，100%用心服务',
	imgCss: 'img4',
}]
const fuwu = document.querySelector('.fuwu');
for (let i = 0; i < FuwuData.length; i++) {
	const div = document.createElement('div');
	div.classList.add('fuwuItem');
	if (i % 2 === 0) {
		// console.log('a');
		// animate__fadeInLeft
		div.classList.add('animate__animated', 'animate__fadeInLeft', 'wow');
	} else {
		div.classList.add('animate__animated', 'animate__fadeInRight', 'wow');
	}
	div.innerHTML = `
	        <div class="fuwuImg ${FuwuData[i].imgCss}"></div>
	        <div class="fuwuText">
	        	<h2>${FuwuData[i].titleh2}</h2>
	        	<h6>${FuwuData[i].titleh6}</h6>
	        </div>
	`
	fuwu.appendChild(div);
}
// ############# Hot渲染 ###################
let DataHot = [{
	itemover: '著名景点：<br>中国科学院西双版纳热带植物园、勐泐大佛寺、野象',
	imgsrc: './images/spot01.jpg',
	hot_courtit: '西双版纳',
	hot_courp1: '市场价：<del>￥4999.00</del>',
	hot_courp2: '价格：￥4299.00'
}, {
	itemover: '蜈支洲岛坐落在三亚市北部的海棠湾内，北面与南湾猴岛遥遥相对，南邻美誉天下第一湾的亚龙湾',
	imgsrc: './images/spot02.jpg',
	hot_courtit: '蜈支洲岛',
	hot_courp1: '市场价：<del>￥3999.00</del>',
	hot_courp2: '价格：￥2699.00'
}, {
	itemover: '著名景点：<br>著名景点漓江、遇龙河、图腾古道、蝴蝶泉、印象刘三姐等',
	imgsrc: './images/spot03.jpg',
	hot_courtit: '阳朔',
	hot_courp1: '市场价：<del>￥1200.00</del>',
	hot_courp2: '价格：￥1099.00'
}, {
	itemover: '著名景点：<br>普达措国家公园、石卡雪山、独克宗古城、噶丹松赞林寺、虎跳峡等',
	imgsrc: './images/spot04.jpg',
	hot_courtit: '香格里拉',
	hot_courp1: '市场价：<del>￥1200.00</del>',
	hot_courp2: '价格：￥1099.00'
}, {
	itemover: '都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录）、世界自然遗产（四川大熊猫栖息地）、全国重点文物保护单位、国家级风景名胜区、国家AAAAA级旅游景区',
	imgsrc: './images/spot05.jpg',
	hot_courtit: '成都--乐山--峨眉山--青城山--都江堰',
	hot_courp1: '市场价：<del>￥4999.00</del>',
	hot_courp2: '价格：￥4299.00'
}, {
	itemover: '著名景点：<br>翠湖、叠瀑、彩林、雪峰、藏情、蓝冰',
	imgsrc: './images/spot06.jpg',
	hot_courtit: '成都-九寨沟',
	hot_courp1: '市场价：<del>￥3999.00</del>',
	hot_courp2: '价格：￥2699.00'
}, {
	itemover: '著名景点：<br>著名景点漓江、遇龙河、图腾古道、蝴蝶泉、印象刘三姐等',
	imgsrc: './images/spot07.jpg',
	hot_courtit: '桂林-漓江-阳朔',
	hot_courp1: '市场价：<del>￥1200.00</del>',
	hot_courp2: '价格：￥1099.00'
}, {
	itemover: '著名景点：<br>百里峡、拒马河、白草畔、鱼谷洞',
	imgsrc: './images/spot08.jpg',
	hot_courtit: '北京-野三坡',
	hot_courp1: '市场价：<del>￥1200.00</del>',
	hot_courp2: '价格：￥1099.00'
}]

function isInSequence(n) {
	let i = 0,
		count = 0;
	while (count <= n) {
		if (i === n) return true;
		i += (count % 2 === 0 ? 1 : 3);
		count++;
	}
	return false;
}
const hot_ul = document.querySelector('.HotMain ul');
for (let i = 0, n = 0; i < DataHot.length; i++) {
	const li = document.createElement('li');
	li.classList.add('hot_item');
	// let n = 0;
	if (isInSequence(i)) {
		li.classList.add('animate__animated', 'animate__rotateInDownLeft', 'wow');
	} else {
		li.classList.add('animate__animated', 'animate__rotateInDownRight', 'wow');
	}
	li.innerHTML = `
	        <div class="hot_courpic">
	        	<a href="javascript:void(0);" target="_self" style="position:relative;display: block;">
	        		<div class="itemover">${DataHot[i].itemover}</div>
	        		<img src="${DataHot[i].imgsrc}">
	        	</a>
	        	<div class="myke_pic_top2"></div>
	        </div>
	        <div class="hot_courtxt">
	        	<h3 class="hot_courtit">${DataHot[i].hot_courtit}</h3>
	        	<p class="hot_courp">${DataHot[i].hot_courp1}</p>
	        	<p class="hot_courp">${DataHot[i].hot_courp2}</p>
	        </div>
	`
	hot_ul.appendChild(li);
	n++;
}
// ############# news渲染 ###################
let Datanews = [{
	title: '巴以冲突游让游客们趋之若鹜 游客数猛增',
	time: '2017-10-27',
	content: '自2005年第二次巴勒斯坦人民大起义结束后，巴以地区的安全形势逐年好转。以色列旅游部的最新数据显示，今年1-4月份，以色列共接待了106万游客，创下历史新高。'
}, {
	title: '出境提示：旅游局提示暂缓赴牙买加旅游',
	time: '2017-10-27',
	content: '从国家旅游局网站获悉，牙买加首都金斯敦发生骚乱，国家旅游局发出紧急出行提示，请中国游客暂缓赴牙买加旅游。'
}, {
	title: '以色列入境旅游增速显著 2012欲达全球400万游客',
	time: '2017-10-27',
	content: '记者从以色列旅游局北京办事处获悉，今年4月份共有31.7 万旅游者到访了以色列，比2009年同期增长了26%，而与历史最高纪录的2008年相比也增加了9%。'
}, {
	title: '美联航客机遇乱流下坠 致至少6名乘客受伤',
	time: '2017-10-27',
	content: '据香港“星岛日报网”报道，周二(25日)，一架美国联合航空公司(United Airlines)由伦敦飞往洛杉矶的班机途中遇到气流，紧急降落。导致至少6乘客受伤。'
}, {
	title: '巴以冲突游让游客们趋之若鹜 游客数猛增',
	time: '2017-10-27',
	content: '自2005年第二次巴勒斯坦人民大起义结束后，巴以地区的安全形势逐年好转。以色列旅游部的最新数据显示，今年1-4月份，以色列共接待了106万游客，创下历史新高。'
}]
const newsText = document.querySelector('.newsText');
for (let i = 0; i < Datanews.length; i++) {
	const div = document.createElement('div');
	div.classList.add('newsItem');
	div.innerHTML = `
	       <h6>${Datanews[i].title}</h6>
	       ${Datanews[i].time}<br>
	       ${Datanews[i].content}
	`
	newsText.appendChild(div);
}
// ############# booking渲染 ###################
let Databook = [{
	circleNum: '01',
	title: '初步旅行路线',
	content: '根据提交的预约信息对旅行线路进行规划和报价'
}, {
	circleNum: '02',
	title: '支付部分定金',
	content: '确定初步方案和报价后，支付部分定金'
}, {
	circleNum: '03',
	title: '确定详细方案',
	content: '对方案进行详细规划和沟通'
}, {
	circleNum: '04',
	title: '交付尾款出发',
	content: '交付尾款后，出发旅游，保持沟通'
}]
const left = document.querySelector('.left');
for (let i = 0; i < Databook.length; i++) {
	const div = document.createElement('div');
	div.classList.add('leftItem');
	div.classList.add('animate__animated', 'animate__lightSpeedInRight', 'wow');

	div.innerHTML = `
	       <div class="circle">${Databook[i].circleNum}</div>
	       <div class="text">
	       	<h4>${Databook[i].title}</h4>
	       	${Databook[i].content}
	       </div>
	`
	if (i !== Databook.length - 1) {
		div.innerHTML += `<div class="xuxian"></div>`
	}
	left.appendChild(div);
}
// ############# 轮播图渲染 ###################
let img1 = document.querySelector('.showNewsImg');
let bgimg = document.querySelector('.news');
let imgarr = ['news_left01.jpg', 'news_left02.jpg', 'news_left03.jpg'];
let k = 0;

function imgadd(newSrc) {
	img1.classList.add('fade-out'); // 添加淡出类  
	setTimeout(() => {
		img1.src = './images/' + newSrc;
		bgimg.style.background = `url(${'./images/' + newSrc}) no-repeat`;
		img1.onload = () => {
			img1.classList.remove('fade-out'); // 移除淡出类以触发淡入  
		};
	}, 1000);
}

function pd() {
	k = (k + 1) % imgarr.length;
	imgadd(imgarr[k]);
}

setInterval(pd, 5000);
const img = document.querySelectorAll('.clickimg');
for (let i = 0; i < img.length; i++) {
	img[i].addEventListener('mouseenter', function() {
		k = i;
		imgadd(imgarr[k]);
	})
}