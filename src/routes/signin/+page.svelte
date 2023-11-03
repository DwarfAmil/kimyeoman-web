<script>
    import Box from "$lib/components/auth/Box.svelte";
    import Title from "$lib/components/auth/Title.svelte";
    import PasswordInput from "$lib/components/auth/PasswordInput.svelte";
    import IDInput from "$lib/components/auth/IDInput.svelte";
    import Button from "$lib/components/auth/Button.svelte";
    import axios from "axios";
    import SignUpText from "$lib/components/auth/SignUpText.svelte";
    import {envVar} from "../../envVar.js";

    let id = "";
    let password = "";

    const signin = async () => {
        if (id === "") { return alert("아이디를 입력하시오")}
        if (password === "") { return alert("비밀번호를 입력하시오")}

        const user = {id, password};

        try {
            const response = await axios.post(envVar.api "/auth/sign-in", user);
            console.log(response);

            localStorage.setItem("token", response.data.token);
            alert("로그인 성공");
            window.location.href = "/";
        }
        catch (error) {
            console.log(error);
            alert("로그인에 실패하였습니다.");
        }
    }
</script>

<div class="main">
    <Box>
        <Title title="signin">Sign In</Title>
        <IDInput input="signin" placeholder="ID" bind:id/>
        <PasswordInput input="signin" placeholder="password" bind:password/>
        <Button state="signin" on:click={()=>signin()}>Sign In</Button>
        <SignUpText/>
    </Box>
</div>

<style>
    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>