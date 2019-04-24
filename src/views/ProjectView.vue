<template>
    <div>
        <samsungcard-chatbot></samsungcard-chatbot>
        <commerce-chatbot></commerce-chatbot>
        <infochatter-webmanager></infochatter-webmanager>
        <disa-webmanager></disa-webmanager>
    </div>
</template>

<script>
import SamsungcardChatbot from '../components/SamsungcardChatbot.vue';
import CommerceChatbot from '../components/CommerceChatbot.vue';
import InfochatterWebmanager from '../components/InfochatterWebmanager.vue';
import DisaWebmanager from '../components/DisaWebmanager.vue';

export default {
    components: {
        SamsungcardChatbot,
        CommerceChatbot,
        InfochatterWebmanager,
        DisaWebmanager,
    }
}
</script>

<style scoped>

</style>
