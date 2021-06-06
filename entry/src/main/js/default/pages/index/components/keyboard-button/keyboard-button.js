import notification from '@system.notification';

export default {
    // type item.type
    // typeDict
    // text keyName
    props: ['type', 'typeDict', 'text'],
    onButtonClick() {
        this.$emit('click', this.text)
    }
}