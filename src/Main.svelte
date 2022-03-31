<script lang="ts">
import Navbar from "./Navbar/Navbar.svelte";
import NavbarItem from "./Navbar/NavbarItem.svelte";
import { Router } from 'svelte-router-spa'
import { routes } from "./routes";

</script>

<Navbar>
    <NavbarItem url='/'>
        <img src="imgs/logo.png" alt="Logo" class="h-full"  />
    </NavbarItem>

    <NavbarItem url="about">
        <p>About</p>
    </NavbarItem>

    <NavbarItem url="contact">
        <p>Contact</p>
    </NavbarItem>

</Navbar>
<div class="p-3">
    <Router routes={routes} />
</div>

<style>

</style>