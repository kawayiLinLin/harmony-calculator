import vibrator from '@system.vibrator';
import prompt from '@system.prompt';
let context;

const typeDict = {
    other: 'other',
    number: 'number',
    operator: 'operator',
    confirm: 'confirm'
}

export default {
    data: {
        images_resource: {
            "more": "common/images/more.png",
        },
        input: '',
        typeDict,
        keyboardItemsNormal: [
            [
                {
                    keyName: 'MC',
                    id: 1,
                    type: typeDict.other
                },
                {
                    keyName: 'M+',
                    id: 2,
                    type: typeDict.other
                },
                {
                    keyName: 'M-',
                    id: 3,
                    type: typeDict.other
                },
                {
                    keyName: 'MR',
                    id: 4,
                    type: typeDict.other
                }
            ],
            [
                {
                    keyName: 'C',
                    id: 5,
                    type: typeDict.other
                },
                {
                    keyName: '÷',
                    id: 6,
                    type: typeDict.operator
                },
                {
                    keyName: '×',
                    id: 7,
                    type: typeDict.operator
                },
                {
                    keyName: '⇐',
                    id: 8,
                    type: typeDict.other
                },
            ],
            [
                {
                    keyName: '7',
                    id: 9,
                    type: typeDict.number
                },
                {
                    keyName: '8',
                    id: 10,
                    type: typeDict.number
                },
                {
                    keyName: '9',
                    id: 11,
                    type: typeDict.number
                },
                {
                    keyName: '-',
                    id: 12,
                    type: typeDict.operator
                }
            ],
            [
                {
                    keyName: '4',
                    id: 13,
                    type: typeDict.number
                },
                {
                    keyName: '5',
                    id: 14,
                    type: typeDict.number
                },
                {
                    keyName: '6',
                    id: 15,
                    type: typeDict.number
                },
                {
                    keyName: '+',
                    id: 16,
                    type: typeDict.operator
                }
            ],
        ],
        keyboardItemsLastTwoLine: [

                [
                    {
                        keyName: '1',
                        id: 17,
                        type: typeDict.number
                    },
                    {
                        keyName: '2',
                        id: 18,
                        type: typeDict.number
                    },
                    {
                        keyName: '3',
                        id: 19,
                        type: typeDict.number
                    },
                ],
                [
                    {
                        keyName: '%',
                        id: 21,
                        type: typeDict.operator
                    },
                    {
                        keyName: '0',
                        id: 22,
                        type: typeDict.number
                    },
                    {
                        keyName: '.',
                        id: 23,
                        type: typeDict.number
                    }
                ],
        ],
        keyboardItemConfirm: {
            keyName: '=',
            id: 20,
            type: typeDict.confirm
        }
    },
    onInit() {
    },
    handleMore() {},
    handleClick(e) {
        vibrator.vibrate({
            mode: 'long',
            success() {
                console.log('success to vibrate');
                prompt.showToast('success to vibrate')
            },
            fail(data, code) {
                console.log(`handle fail, data = ${data}, code = ${code}`);
                prompt.showToast(`handle fail, data = ${data}, code = ${code}`)
            },
        })
        console.log('我被调用了')
        this.input += e.detail
    }
}
