/** チーム管理（管理者） **/
var data = [
    {
        round: 1,
        team: [
            "営企",
            "情シス",
            "ブラ戦"
        ]
    },
    {
        round: 2,
        team: [
            "地リレ",
            "IT・デジ戦"
        ]
    },
    {
        round: 3,
        team: []
    }
];

window.addEventListener('DOMContentLoaded', function () {
    initDisplay();

    const editIcon = document.getElementsByClassName('mt_editIcon');
    const deleteIcon = document.getElementsByClassName('mt_deleteIcon');
    const addMemberLink = document.getElementsByClassName('mt_addMemberLink');

    for (let i = 0; i < editIcon.length; i++) {
        editIcon[i].addEventListener('click', function (e) {
            // イベントの伝播を防止
            e.preventDefault();
            e.stopPropagation();

            // 編集アイコンを非活性化
            this.classList.add('disabled');

            // 入力欄を表示
            const teamName = this.parentElement.previousElementSibling.innerText;
            const input = document.createElement('input');
            input.type = 'text';
            input.classList.add('mt_teamNameInput');
            input.value = teamName;
            this.parentElement.previousElementSibling.replaceWith(input);

            // フォーカスオン
            input.focus();

            // 入力欄にイベントを追加
            input.addEventListener('blur', blurMemberInput);
        });
    }

    for (let i = 0; i < deleteIcon.length; i++) {
        deleteIcon[i].addEventListener('click', function (e) {
            // イベントの伝播を防止
            e.preventDefault();
            e.stopPropagation();

            if (this.parentElement.parentElement.parentElement.parentElement.children.length == 1) {
                this.parentElement.parentElement.parentElement.parentElement.remove();
            } else {
                this.parentElement.parentElement.parentElement.remove();
            }
        });
    }

    for (let i = 0; i < addMemberLink.length; i++) {
        addMemberLink[i].addEventListener('click', function () {
            if (this.parentElement.parentElement.getElementsByClassName('mt_teamList')) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.classList.add('mt_teamBtn');
                a.href = 'javascript:void(0);';
                const input = document.createElement('input');
                input.type = 'text';
                input.classList.add('mt_teamNameInput');
                a.appendChild(input);
                const div1 = document.createElement('div');
                div1.classList.add('mt_teamBtn_icons');
                const div2 = document.createElement('div');
                div2.classList.add('mt_editIcon');
                const img1 = document.createElement('img');
                img1.src = '../futsal_file/image/pencil.svg';
                img1.alt = '編集';
                div2.appendChild(img1);
                const img2 = document.createElement('img');
                img2.src = '../futsal_file/image/pencil_disactive.svg';
                img2.alt = '編集（非活性）';
                div2.appendChild(img2);
                div1.appendChild(div1);
                a.appendChild(div1);
                li.appendChild(a);

                this.parentElement.parentElement.getElementsByClassName('mt_teamList')[0].appendChild(li);
            }
        });
    }
});

function initDisplay() {

}

function blurMemberInput() {
    const teamName = this.value;

    const p = document.createElement('p');
    p.classList.add('c_typo_bodyM', 'c_typo_BLK01');
    p.innerText = teamName;

    this.replaceWith(p);

    p.nextElementSibling.firstElementChild.classList.remove('disabled');
}