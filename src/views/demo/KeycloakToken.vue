<template>
    <div>
        <div class="card flex justify-center">
            <IftaLabel>
            <Textarea id="description" v-model="value" rows="5" cols="30" style="resize: none" />
            <label for="description">Description</label>
        </IftaLabel>
        <FloatLabel variant="on">
            <AutoComplete v-model="value3" inputId="on_label" />
            <label for="on_label">On Label</label>
        </FloatLabel>
        </div>
        <div>State: {{ state }}</div>
        <div>session_state: {{ session_state }}</div>
        <div>iss: {{ iss }}</div>
        <div>code: {{ code }}</div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { apiPost, apiGetNoParam, postKey } from '@/api/index'
import Textarea from 'primevue/textarea';
import IftaLabel from 'primevue/iftalabel';
import FloatLabel from 'primevue/floatlabel';
import AutoComplete from 'primevue/autocomplete';
import axios from 'axios'
import VueAxios from 'vue-axios'

const router = useRouter()
const route = useRoute()
const value3 = ref('')
const value = ref('')
const state = ref('')
const session_state = ref('')
const iss = ref('')
const code = ref('')
onMounted(async () => {
    let urlCalback = JSON.parse(JSON.stringify(route.query))
    state.value = urlCalback.state
    session_state.value = urlCalback.session_state
    iss.value = urlCalback.iss
    code.value = urlCalback.code
    let val = {
        grant_type: "authorization_code",
        client_id: "login",
        client_secret: "sJkqmjvHsPwwC4xZJG7svW8OPhrnHJa9",
        redirect_uri: "http://localhost:8080/demo",
        code: code.value
    };

    let data = Object.keys(val)
    .map((key) => `${key}=${encodeURIComponent(val[key])}`)
    .join('&');
    console.log("data");
    console.log(data);
    const options = {
        method: 'POST',
        headers: { 
            'content-type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Access-Control-Max-Age': '3600',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'access-control-allow-headers,access-control-allow-methods,access-control-allow-origin'
         },
        data,
        url: 'https://staging-keycloak.opes.vn/realms/test/protocol/openid-connect/token',
        };

        const response = await axios(options);  // wrap in async function
        console.log("response");
        console.log(response);

    // await postKey("https://staging-keycloak.opes.vn/realms/test/protocol/openid-connect/token", data).then(res => {
    //     let response: any = res
    //     console.log("response")
    //     console.log(response)

    // })
})
</script>