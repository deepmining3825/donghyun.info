<template>
    <div>
        <samsungcard-chatbot></samsungcard-chatbot>
        <commerce-chatbot></commerce-chatbot>
        <infochatter-webmanager></infochatter-webmanager>
    </div>
</template>

<script>
import SamsungcardChatbot from '../components/SamsungcardChatbot.vue';
import CommerceChatbot from '../components/CommerceChatbot.vue';
import InfochatterWebmanager from '../components/InfochatterWebmanager.vue';

export default {
    components: {
        SamsungcardChatbot,
        CommerceChatbot,
        InfochatterWebmanager,
    }
}
</script>

<style scoped>

</style>
