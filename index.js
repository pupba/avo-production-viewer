// 오일
const oils = [
    {id:"0",name:"없음",path:""},
    {id:"1",name:"아보카도 엑스트라버진",path:"./images/oil/아보카도엑스트라버진.png"},
    {id:"2",name:"올리브 엑스트라버진",path:"./images/oil/올리브엑스트라버진.png"},
    {id:"3",name:"올리브 포마스",path:"./images/oil/올리브포마스.png"},
    {id:"4",name:"트러플 오일",path:"./images/oil/트러플오일.png"},
    {id:"5",name:"해마라기",path:"./images/oil/해바라기.png"},
]

const oilSelector = document.querySelectorAll(".oil-selector");
const oilImgSelector = document.querySelectorAll(".oil-img-selector");

oilSelector.forEach((selector,index)=>{
    selector.innerHTML = oils.map(oil =>
        `<option value="${oil.id}">${oil.name}`
    ).join("");
    selector.addEventListener('change',()=>{
        const selectedOil = oils.find(oil => oil.id === selector.value);
        oilImgSelector[index].src = selectedOil.path;
        oilImgSelector[index].alt = selectedOil.name;
    });
});

// 루땡
const topSeals = [
    {id:"0",name:"없음",path:""},
    {id:"1",name:"금색",path:"./images/top_seal/1.png"},
    {id:"2",name:"붉은색",path:"./images/top_seal/2.png"},
    {id:"3",name:"검은색",path:"./images/top_seal/3.png"},
]

const topSealSelector = document.querySelectorAll(".top-seal-selector");
const topSealImgSelector = document.querySelectorAll(".top-seal-img-selector");

topSealSelector.forEach((selector,index)=>{
    selector.innerHTML = topSeals.map(topSeal => 
        `<option value="${topSeal.id}">${topSeal.name}</option>`
    ).join("");
    selector.addEventListener('change',()=>{
        const selectTopSeal = topSeals.find(
            topSeal => topSeal.id === selector.value
        );
        topSealImgSelector[index].src = selectTopSeal.path;
        topSealImgSelector[index].alt = selectTopSeal.name;
    });
});

// 라벨
const labels = [
    {id:"0",name:"없음",path:""},
    {id:"1",group:"업체1",name:"업체1-라벨1",path:"./images/labels/1.png"},
    {id:"2",group:"업체1",name:"업체1-라벨2",path:"./images/labels/2.png"},
    {id:"3",group:"업체2",name:"업체2-라벨3",path:"./images/labels/3.png"}
];

const labelSelector = document.querySelectorAll(".label-selector");
const labelImgSelector = document.querySelectorAll(".label-img-selector");

// 그룹별로 데이터 정리
const groupedLabels = labels.reduce((groups, label) => {
    if (!groups[label.group]) {
        groups[label.group] = [];
    }
    groups[label.group].push(label);
    return groups;
}, {});

labelSelector.forEach((selector, index) => {
    // 그룹별로 <optgroup>과 <option> 생성
    selector.innerHTML = Object.keys(groupedLabels).map(group => `
        <optgroup label="${group}">
            ${groupedLabels[group].map(label => `
                <option value="${label.id}">${label.name}</option>
            `).join('')}
        </optgroup>
    `).join('');

    // 선택 이벤트 처리
    selector.addEventListener('change', () => {
        const selectedLabel = labels.find(label => label.id === selector.value);
        if (selectedLabel) {
            labelImgSelector[index].src = selectedLabel.path;
            labelImgSelector[index].alt = selectedLabel.name;
        }
    });
});
