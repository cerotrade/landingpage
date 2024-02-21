<template>
    <div>
        <HomeNavbar />
        <Introduction />
        <div class="flex flex-column text-center gap-8 mt-8 font-inter" id="contact-box">
            <h2 class="font-bold text-grays-1 text-2xl">Contáctanos</h2>
            <div class="bg-background-gray p-8">
                <p class="text-grays-2 px-64">
                    ¿Tienes alguna duda o comentario? ¿Te gustaría ser parte de nuestro equipo?
                    ¡Déjanos tu mensaje!
                </p>
            </div>
            <div class="flex flex-column gap-8 px-64 py-4 mb-8">
                <input
                    type="text"
                    placeholder="Nombre"
                    class="border-[1.5px] border-solid bg-background-gray
                    text-grays-2 rounded-sm border-grays-2 px-4 py-2  placeholder:text-grays-2"
                />
                <input
                    type="text"
                    placeholder="Correo electrónico"
                    class="border-[1.5px] border-solid bg-background-gray
                    text-grays-2 rounded-sm border-grays-2 px-4 py-2  placeholder:text-grays-2"
                />
                <input
                    type="text"
                    placeholder="Asunto"
                    class="border-[1.5px] border-solid bg-background-gray
                    text-grays-2 rounded-sm border-grays-2 px-4 py-2  placeholder:text-grays-2"
                />
                <textarea
                    placeholder="Mensaje"
                    class="border-[1.5px] border-solid bg-background-gray
                    text-grays-2 rounded-sm border-grays-2 px-4 py-2  placeholder:text-grays-2"
                />
                <div class="flex justify-end">
                    <button
                        class="bg-greens-1 rounded-sm flex w-24 font-base text-sm
                        justify-center py-1 px-6"
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
        <WelcomeFooter />
    </div>
</template>
<script>

// components
import Introduction from '@/components/boxes/introduction.vue';
import HomeNavbar from '@/components/navigation/welcome-navbar.vue';
import WelcomeFooter from '@/components/navigation/footer.vue';

export default {
  components: {
    HomeNavbar,
    Introduction,
    WelcomeFooter,
  },
};
</script>
