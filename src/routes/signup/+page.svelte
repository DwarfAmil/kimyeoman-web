<script>
    import Box from "$lib/components/auth/Box.svelte";
    import axios from "axios";
    import IDInput from "$lib/components/auth/IDInput.svelte";
    import Title from "$lib/components/auth/Title.svelte";
    import Button from "$lib/components/auth/Button.svelte";
    import PasswordInput from "$lib/components/auth/PasswordInput.svelte";
    import PasswordCheckInput from "$lib/components/auth/PasswordCheckInput.svelte";

    let id = "";
    let password = "";
    let passwordCheck = "";

    export const signup = async () => {
        if (id == "") { return alert("아이디를 입력하시오")}
        if (password == "") { return alert("비밀번호를 입력하시오")}
        if (passwordCheck == "" || password != passwordCheck) { return alert("비밀번호를 확인하십시오")}

        const user = {id, password};

        try {
            const response = await axios.post("http://localhost:8000/auth/sign-up", user);
            alert(response.data.message);
            window.location.href = "/signin";
        }
        catch (error) {
            console.log(error);
            alert("회원가입에 실패하였습니다.");
        }
    }
</script>

<div class="main">
    <Box>
        <Title title="signup">Sign Up</Title>
        <IDInput input="signup" placeholder="ID" bind:id/>
        <PasswordInput input="signup" placeholder="password" bind:password/>
        <PasswordCheckInput placeholder="password check" bind:passwordCheck/>
        <Button state="signup" on:click={()=>signup()}>Sign Up</Button>
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