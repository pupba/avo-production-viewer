// 루땡 (topSeal 관련 부분은 수정하지 않음)
const topSeals = [
    {id:"0", name:"없음", path:""},
    {id:"1", name:"검은색", path:"./images/top_seal/1.png"},
    {id:"2", name:"검은색 손잡이", path:"./images/top_seal/2.png"},
    {id:"3", name:"노랑색", path:"./images/top_seal/3.png"},
    {id:"4", name:"녹색", path:"./images/top_seal/4.png"},
    {id:"5", name:"보라색", path:"./images/top_seal/5.png"},
    {id:"6", name:"연두색", path:"./images/top_seal/6.png"},
    {id:"7", name:"흰색", path:"./images/top_seal/7.png"},
];

const topSealSelector = document.querySelectorAll(".top-seal-selector");
const topSealImgSelector = document.querySelectorAll(".top-seal-img-selector");

topSealSelector.forEach((selector, index) => {
    selector.innerHTML = topSeals.map(topSeal =>
        `<option value="${topSeal.id}">${topSeal.name}</option>`
    ).join("");
    
    selector.addEventListener('change', () => {
        const selectTopSeal = topSeals.find(
            topSeal => topSeal.id === selector.value
        );
        topSealImgSelector[index].src = selectTopSeal.path;
        topSealImgSelector[index].alt = selectTopSeal.name;
    });
});

// 업체 및 오일 정보 설정
const companies = [
    {id:"0", name:"없음"},
    {id:"1", name:"1인치라이프"},
    {id:"2", name:"국민티에스"},
    {id:"3", name:"네추럴엔도텍"},
    {id:"4", name:"비젼스타"},
    {id:"5", name:"써클코리아"},
    {id:"6", name:"아보에프엔씨"},
    {id:"7", name:"애즈맘"},
    {id:"8", name:"어드반셋"},
    {id:"9", name:"에스엠디"},
    {id:"10", name:"올레오랩"},
    {id:"11", name:"제이에스팜"},
    {id:"12", name:"천기초맛있는허브"},
    {id:"13", name:"천하코퍼레이션"},
    {id:"14", name:"태웅물산"},
    {id:"15", name:"파니몰"},
    {id:"16", name:"프라임마케팅"},
    {id:"17", name:"플러스벨류"},
];

const oils = [
    {id:"0", name:"없음"},
    {id:"1", name:"대마종자유"},
    {id:"2", name:"발사믹"},
    {id:"3", name:"아보카도 엑스트라버진"},
    {id:"4", name:"올리브 엑스트라버진"},
    {id:"5", name:"올리브 포마스"},
    {id:"6", name:"참기름"},
    {id:"7", name:"쿠킹오일"},
    {id:"8", name:"트러플"},
    {id:"9", name:"해바라기"}
];

// 라벨 정보 (실제 파일 존재 여부 포함)

const labelInfo = [
    // 1인치 라이프
    {company: "1인치라이프", oil: "아보카도 엑스트라버진", version: "", path: "./images/labels/1인치라이프/아보카도.jpg"},
    {company: "1인치라이프", oil: "대마종자유", version: "", path: "./images/labels/1인치라이프/대마종자유.jpg"},
    // 국민티에스
    {company: "국민티에스", oil: "아보카도 엑스트라버진", version: "", path: "./images/labels/국민티에스/아보카도.jpg"},
    {company: "국민티에스", oil: "올리브 엑스트라버진", version: "", path: "./images/labels/국민티에스/올리브엑.jpg"},
    {company: "국민티에스", oil: "해바라기", version: "", path: "./images/labels/국민티에스/해바라기.jpg"},
    // 네추럴엔도텍
    {company: "네추럴엔도텍", oil: "아보카도 엑스트라버진", version: "", path: "./images/labels/네추럴엔도텍/아보카도.jpg"},
    {company: "네추럴엔도텍", oil: "올리브 엑스트라버진", version: "", path: "./images/labels/네추럴엔도텍/올리브엑.jpg"},
    {company: "네추럴엔도텍", oil: "해바라기", version: "", path: "./images/labels/네추럴엔도텍/해바라기.jpg"},
    // 비젼스타의 아보카도
    {company: "비젼스타", oil: "아보카도 엑스트라버진", version: "1", path: "./images/labels/비젼스타/아보카도1.jpg"},
    {company: "비젼스타", oil: "아보카도 엑스트라버진", version: "2", path: "./images/labels/비젼스타/아보카도2.jpg"},
    {company: "비젼스타", oil: "아보카도 엑스트라버진", version: "3", path: "./images/labels/비젼스타/아보카도3.jpg"},
    {company: "비젼스타", oil: "트러플", version: "", path: "./images/labels/비젼스타/대마종자유.jpg"},
    // 써클코리아
    {company: "써클코리아", oil: "아보카도 엑스트라버진", version: "", path: "./images/labels/써클코리아/아보카도.jpg"},
    // 아보에프엔씨
    {company: "아보에프엔씨", oil: "발사믹", version: "", path: "./images/labels/아보에프엔씨/발사믹.jpg"},
    {company: "아보에프엔씨", oil: "아보카도 엑스트라버진", version: "", path: "./images/labels/아보에프엔씨/아보카도.jpg"},
    {company: "아보에프엔씨", oil: "올리브 엑스트라버진", version: "", path: "./images/labels/아보에프엔씨/올리브엑.jpg"},
    {company: "아보에프엔씨", oil: "올리브 포마스", version: "", path: "./images/labels/아보에프엔씨/올리브포.jpg"},
    {company: "아보에프엔씨", oil: "참기름", version: "", path: "./images/labels/아보에프엔씨/참기름.jpg"},
    {company: "아보에프엔씨", oil: "쿠킹오일", version: "", path: "./images/labels/아보에프엔씨/쿠킹오일.jpg"},
    {company: "아보에프엔씨", oil: "트러플", version: "", path: "./images/labels/아보에프엔씨/트러플.jpg"},
    {company: "아보에프엔씨", oil: "해바라기", version: "", path: "./images/labels/아보에프엔씨/해바라기.jpg"},
    // 애즈맘
    {company: "애즈맘", oil: "아보카도 엑스트라버진", version: "", path: "./images/labels/애즈맘/아보카도.jpg"},
    // 어드반셋
    {company: "어드반셋", oil: "아보카도 엑스트라버진", version: "", path: "./images/labels/어드반셋/아보카도.jpg"},
    // 에스엠디
    {company: "에스엠디", oil: "아보카도 엑스트라버진", version: "", path: "./images/labels/에스엠디/아보카도.jpg"},
    // 올레오랩
    {company: "올레오랩", oil: "아보카도 엑스트라버진", version: "", path: "./images/labels/올레오랩/아보카도.jpg"},
    {company: "올레오랩", oil: "발사믹", version: "", path: "./images/labels/올레오랩/발사믹.jpg"},
    {company: "올레오랩", oil: "올리브 포마스", version: "", path: "./images/labels/올레오랩/올리브포.jpg"},
    // 제이에스팜
    {company: "제이에스팜", oil: "아보카도 엑스트라버진", version: "1", path: "./images/labels/제이에스팜/아보카도1.jpg"},
    {company: "제이에스팜", oil: "아보카도 엑스트라버진", version: "2", path: "./images/labels/제이에스팜/아보카도2.jpg"},
    {company: "제이에스팜", oil: "발사믹", version: "", path: "./images/labels/제이에스팜/발사믹.jpg"},
    {company: "제이에스팜", oil: "올리브 엑스트라버진", version: "", path: "./images/labels/제이에스팜/올리브엑.jpg"},
    {company: "제이에스팜", oil: "대마종자유", version: "", path: "./images/labels/제이에스팜/대마종자유.jpg"},
    // 천기초맛있는 허브
    {company: "천기초맛있는허브", oil: "아보카도 엑스트라버진", version: "", path: "./images/labels/천기초맛있는허브/아보카도.jpg"},
    // 천하코퍼레이션
    {company: "천하코퍼레이션", oil: "아보카도 엑스트라버진", version: "", path: "./images/labels/천하코퍼레이션/아보카도.jpg"},
    // 태웅물산
    {company: "태웅물산", oil: "아보카도 엑스트라버진", version: "", path: "./images/labels/태웅물산/아보카도.jpg"},
    // 파니몰
    {company: "파니몰", oil: "아보카도 엑스트라버진", version: "", path: "./images/labels/파니몰/아보카도.jpg"},
    {company: "파니몰", oil: "대마종자유", version: "", path: "./images/labels/파니몰/대마종자유.jpg"},
    // 프라임마케팅
    {company: "프라임마케팅", oil: "아보카도 엑스트라버진", version: "", path: "./images/labels/프라임마케팅/아보카도.jpg"},
    // 플러스벨류
    {company: "플러스벨류", oil: "아보카도 엑스트라버진", version: "", path: "./images/labels/플러스벨류/아보카도.jpg"},
];

const companySelector = document.querySelectorAll(".company-selector");
const oilSelector = document.querySelectorAll(".oil-selector");
const labelImgSelector = document.querySelectorAll(".label-img-selector");
const oilImgSelector = document.querySelectorAll(".oil-img-selector");

// 회사 선택 드롭다운 초기화
companySelector.forEach((selector, index) => {
    selector.innerHTML = companies.map(company =>
        `<option value="${company.id}">${company.name}</option>`
    ).join("");
    
    // 회사 선택 시 이벤트
    selector.addEventListener('change', () => {
        const selectedCompany = companies.find(company => company.id === selector.value);
        
        if (selectedCompany.name === "없음") {
            oilSelector[index].innerHTML = `<option value="0">없음</option>`;
            labelImgSelector[index].src = "";
            labelImgSelector[index].alt = "";
            oilImgSelector[index].src = "";
            oilImgSelector[index].alt = "";
            return;
        }
        
        // 선택된 회사에 해당하는 오일 필터링 (중복 제거)
        const availableOils = [...new Set(labelInfo
            .filter(item => item.company === selectedCompany.name)
            .map(item => item.oil))];
        
        // 오일 드롭다운 업데이트
        oilSelector[index].innerHTML = `<option value="0">없음</option>` + 
            oils
                .filter(oil => oil.name !== "없음" && availableOils.includes(oil.name))
                .map(oil => `<option value="${oil.id}">${oil.name}</option>`)
                .join("");
        
        // 오일 선택 초기화
        labelImgSelector[index].src = "";
        labelImgSelector[index].alt = "";
        oilImgSelector[index].src = "";
        oilImgSelector[index].alt = "";
    });
});

// 오일 선택 드롭다운 초기화
oilSelector.forEach((selector, index) => {
    selector.innerHTML = `<option value="0">없음</option>`;
    
    // 오일 선택 시 이벤트
    selector.addEventListener('change', () => {
        const selectedOil = oils.find(oil => oil.id === selector.value);
        const selectedCompany = companies.find(company => company.id === companySelector[index].value);
        
        if (selectedOil.name === "없음" || selectedCompany.name === "없음") {
            labelImgSelector[index].src = "";
            labelImgSelector[index].alt = "";
            oilImgSelector[index].src = "";
            oilImgSelector[index].alt = "";
            return;
        }
        
        // 해당 회사와 오일에 맞는 라벨 버전들 찾기
        const availableVersions = labelInfo.filter(
            item => item.company === selectedCompany.name && item.oil === selectedOil.name
        );
        
        // 버전이 여러 개인 경우 (예: 비젼스타의 아보카도 엑스트라버진)
        if (availableVersions.length > 1) {
            // 버전 선택을 위한 드롭다운 생성 (동적으로)
            const versionSelectId = `version-select-${index}`;
            
            // 기존 버전 선택기가 있으면 제거
            const existingVersionSelect = document.getElementById(versionSelectId);
            if (existingVersionSelect) {
                existingVersionSelect.parentNode.removeChild(existingVersionSelect);
            }
            
            // 새 버전 선택기 생성
            const versionSelect = document.createElement('select');
            versionSelect.id = versionSelectId;
            versionSelect.className = 'version-selector';
            versionSelect.innerHTML = availableVersions.map(version => 
                `<option value="${version.version}">${selectedOil.name} ${version.version}</option>`
            ).join('');
            
            // 선택기를 오일 선택기 다음에 삽입
            selector.parentNode.insertBefore(versionSelect, selector.nextSibling);
            
            // 버전 선택 시 이벤트
            versionSelect.addEventListener('change', () => {
                const selectedVersion = versionSelect.value;
                const selectedLabel = availableVersions.find(v => v.version === selectedVersion);
                
                // 라벨 이미지 설정
                labelImgSelector[index].src = selectedLabel.path;
                labelImgSelector[index].alt = `${selectedCompany.name} ${selectedOil.name} ${selectedVersion} 라벨`;
                
                // 오일 이미지 경로 설정 - 버전에 맞게 경로 설정
                const oilPath = `./images/oil/${selectedCompany.name}/${selectedOil.name}${selectedVersion}.png`;
                oilImgSelector[index].src = oilPath;
                oilImgSelector[index].width=300;
                oilImgSelector[index].alt = `${selectedCompany.name} ${selectedOil.name} ${selectedVersion} 오일`;
            });

            
            // 기본 첫 번째 버전 선택
            versionSelect.dispatchEvent(new Event('change'));
        } else if (availableVersions.length === 1) {
            // 버전이 하나만 있는 경우
            const selectedLabel = availableVersions[0];
            
            // 기존 버전 선택기가 있으면 제거
            const versionSelectId = `version-select-${index}`;
            const existingVersionSelect = document.getElementById(versionSelectId);
            if (existingVersionSelect) {
                existingVersionSelect.parentNode.removeChild(existingVersionSelect);
            }
            
            // 라벨 이미지 설정
            labelImgSelector[index].src = selectedLabel.path;
            labelImgSelector[index].alt = `${selectedCompany.name} ${selectedOil.name} 라벨`;
            
            // 오일 이미지 경로 설정
            const oilPath = `./images/oil/${selectedCompany.name}/${selectedOil.name}.png`;
            oilImgSelector[index].src = oilPath;
            oilImgSelector[index].width=300;
            oilImgSelector[index].alt = `${selectedCompany.name} ${selectedOil.name} 오일`;
        }
    });
});
