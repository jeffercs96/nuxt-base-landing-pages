<template>
  <header class="bg-white dark:bg-slate-950 fixed z-50 w-screen">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=500"
            alt=""
          />
        </a>
      </div>
      <div class="flex lg:hidden">
        <AppDarkModeButton />

        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              v-slot="{ open }"
            >
              <span class="sr-only">Open main menu</span>
              <transition name="fade" mode="out-in">
                <Icon
                  :key="open"
                  :name="
                    open
                      ? 'line-md:menu-to-close-transition'
                      : 'line-md:close-to-menu-transition'
                  "
                  class="text-slate-950 dark:text-green-500"
                  size="1.5em"
                />
              </transition>
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black/5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    class="group flex w-full items-center rounded-md px-2 py-2 text-sm text-slate-950 dark:text-green-500"
                  >
                    <Icon
                      name="line-md:home"
                      class="mr-2 h-5 w-5 text-slate-950 dark:text-green-500"
                    />
                    Home
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    class="group flex w-full items-center rounded-md px-2 py-2 text-sm text-slate-950 dark:text-green-500"
                  >
                    <Icon
                      name="line-md:account"
                      class="mr-2 h-5 w-5 text-slate-950 dark:text-green-500"
                    />
                    About me
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    class="group flex w-full items-center rounded-md px-2 py-2 text-sm text-slate-950 dark:text-green-500"
                  >
                    <Icon
                      name="line-md:briefcase"
                      class="mr-2 h-5 w-5 text-slate-950 dark:text-green-500"
                    />
                    Portfolio
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        
          <a
          v-for="link in links"
          :key="link.to"
            href="#"
            class="w-32 text-center py-2 px-2 rounded text-slate-950 dark:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >{{ link.label }}</a
          >
        
      </div>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <AppDarkModeButton />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/vue";

const links = [
  { label: "Home", icon: "line-md:home", to: "/" },
  { label: "About me", icon: "line-md:account", to: "/" },
  { label: "Portfolio", icon: "line-md:briefcase", to: "/" },
];
</script>
