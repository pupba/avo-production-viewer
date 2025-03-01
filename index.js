// 루땡
const topSeals = [
    {id:"0",name:"없음",path:""},
    {id:"1",name:"검은색",path:"./images/top_seal/1.png"},
    {id:"2",name:"검은색 손잡이",path:"./images/top_seal/2.png"},
    {id:"3",name:"노랑색",path:"./images/top_seal/3.png"},
    {id:"4",name:"녹색",path:"./images/top_seal/4.png"},
    {id:"5",name:"보라색",path:"./images/top_seal/5.png"},
    {id:"6",name:"연두색",path:"./images/top_seal/6.png"},
    {id:"7",name:"흰색",path:"./images/top_seal/7.png"},
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
    {id:"0",group:"없음",name:"없음",path:""},
    {id:"1",group:"아칸",name:"아보카도 엑스트라버진",lpath:"",opath:"./images/oil/아칸-아보카도엑스트라버진.png"},
    {id:"2",group:"에스엠디",name:"아보카도 엑스트라버진",lpath:"./images/labels/에스엠디-아보카도.png",opath:"./images/oil/에스엠디-아보카도엑스트라버진.png"},
    {id:"3",group:"올가유",name:"아보카도 엑스트라버진",lpath:"./images/labels/올가유-아보카도.png",opath:"./images/oil/올가유-아보카도엑스트라버진.png"},
    {id:"4",group:"제이에스팜",name:"아보카도 엑스트라버진",lpath:"./images/labels/제이에스팜-아보카도.png",opath:"./images/oil/제이에스팜-아보카도엑스트라버진.png"},
    {id:"5",group:"태웅(홈쇼핑)",name:"아보카도 엑스트라버진",lpath:"./images/labels/태웅(홈쇼핑)-아보카도.png",opath:"./images/oil/태웅(홈쇼핑)-아보카도엑스트라버진.png"},
    {id:"6",group:"파니몰",name:"아보카도 엑스트라버진",lpath:"./images/labels/파니몰-아보카도.png",opath:"./images/oil/파니몰-아보카도엑스트라버진.png"},
    {id:"7",group:"아칸",name:"올리브 엑스트라버진",lpath:"",opath:"./images/oil/올리브엑스트라버진.png"},
    {id:"8",group:"아칸",name:"올리브 포마스",lpath:"",opath:"./images/oil/올리브포마스.png"},
    {id:"9",group:"아칸",name:"트러플 오일",lpath:"",opath:"./images/oil/트러플오일.png"},
    {id:"10",group:"아칸",name:"해바라기",lpath:"",opath:"./images/oil/해바라기.png"},
];

// 오일
const oils = [
    {id:"1",label:"아칸",name:"아보카도 엑스트라버진"},
    {id:"2",label:"에스엠디",name:"아보카도 엑스트라버진"},
    {id:"3",label:"올가유",name:"아보카도 엑스트라버진"},
    {id:"4",label:"제이에스팜",name:"아보카도 엑스트라버진"},
    {id:"5",label:"태웅(홈쇼핑)",name:"아보카도 엑스트라버진"},
    {id:"6",label:"파니몰",name:"아보카도 엑스트라버진"},
    {id:"7",label:"아칸",name:"올리브 엑스트라버진"},
    {id:"8",label:"아칸",name:"올리브 포마스"},
    {id:"9",label:"아칸",name:"트러플 오일"},
    {id:"10",label:"아칸",name:"해바라기"},
]

const oils_list = [
    {id:"0",name:"없음"},
    {id:"1",name:"아보카도 엑스트라버진"},
    {id:"2",name:"올리브 엑스트라버진"},
    {id:"3",name:"올리브 포마스"},
    {id:"4",name:"트러플 오일"},
    {id:"5",name:"해바라기"},
];
const oilSelector = document.querySelectorAll(".oil-selector");
const oilImgSelector = document.querySelectorAll(".oil-img-selector");

const labelSelector = document.querySelectorAll(".label-selector");
const labelImgSelector = document.querySelectorAll(".label-img-selector");

// 그룹별로 데이터 정리
const groupedLabels = labels.reduce((groups, label) => {
    if (!groups[label.name]) {
        groups[label.name] = [];
    }
    groups[label.name].push(label);
    return groups;
}, {});


oilSelector.forEach((selector,index)=>{
    selector.innerHTML = oils_list.map(oil =>
        `<option value="${oil.id}">${oil.name}`
    ).join("");
    selector.addEventListener('change',()=>{
        const selectedOil = oils_list.find(oil => oil.id === selector.value).name;
        
        labelSelector.forEach((selector2,index2)=>{
            // 필터링
            const filteredLabels = groupedLabels[selectedOil] || [];
            // 한개의 경우
            if(filteredLabels.length === 1){
                selector2.innerHTML = `<option value="${filteredLabels[0].group}">${filteredLabels[0].group}</option>`
                const selectedLabel = labels.find(
                    label => (label.name === selectedOil) && (label.group === selector2.value)
                )
                labelImgSelector[index2].src = selectedLabel.lpath;
                labelImgSelector[index2].alt = selectedLabel.name;
                oilImgSelector[index2].src = selectedLabel.opath;
                oilImgSelector[index2].alt = selectedLabel.name;
            }
            else{
                selector2.innerHTML = filteredLabels.map(label => `
                    <option value="${label.group}">${label.group}</option>
                `).join('');
                // 기본값
                const selectedLabel = labels.find(
                    label => (label.name === selectedOil) && (label.group === selector2.value)
                )
                labelImgSelector[index2].src = selectedLabel.lpath;
                labelImgSelector[index2].alt = selectedLabel.name;
                oilImgSelector[index2].src = selectedLabel.opath;
                oilImgSelector[index2].alt = selectedLabel.name;

                selector2.addEventListener('change',()=>{
                    // 그룹 체크, 이름 체크
                    const selectedLabel = labels.find(
                        label => (label.name === selectedOil) && (label.group === selector2.value)
                    )
                    labelImgSelector[index2].src = selectedLabel.lpath;
                    labelImgSelector[index2].alt = selectedLabel.name;
                    oilImgSelector[index2].src = selectedLabel.opath;
                    oilImgSelector[index2].alt = selectedLabel.name;
                })
            }
        });
    });
});