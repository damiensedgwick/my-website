<script lang="ts">
  import {
    Modal,
    initializeStores,
    type ModalComponent,
  } from "@skeletonlabs/skeleton";
  import ModalContent from "$lib/components/ModalContent.svelte";

  initializeStores();

  const modalRegistery: Record<string, ModalComponent> = {
    modalComponent: { ref: ModalContent },
  };

  import "../app.postcss";
</script>

<Modal components={modalRegistery} />

<slot />
