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
    
    <NavbarItem url="connect">
        <p>Connect</p>
    </NavbarItem>

    <NavbarItem url="contact">
        <p>Contact</p>
    </NavbarItem>

    <!-- Middle divider -->

    <!-- Move discord logo out of navbar for now -->
    <!-- <div style="flex-grow: 1;"></div>

    <NavbarItem url="https://discord.gg/7bExJDg3ZK">
        <img src="imgs/discord.png" alt="Logo" class="h-full"  />
    </NavbarItem> -->


</Navbar>
<div class="p-3">
    <Router routes={routes} />
</div>

<style>

</style>