<template>
  <div>
    <h1>Hello UI</h1>
    <ui-card :data_items="items"></ui-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: "1",
          name: "Google",
          defaultName: "Google Test",
          link: "https://www.google.com/",
          image:
            "https://images.unsplash.com/photo-1572059002053-8cc5ad2f4a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdvb2dsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: "2",
          name: "Maps",
          link: "https://www.google.co.in/maps?hl=en&tab=rl&authuser=0",
          image:
            "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: "3",
          name: "YouTube",
          link: "https://www.youtube.com/",
          icon: "exclamation-triangle",
          image:
            "https://images.unsplash.com/photo-1637806631554-bcfe2c618058?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHlvdXR1YmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: "4",
          name: "PlayStore",
          link: "https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026376_creativeid_535350509651_device_c&gclid=Cj0KCQjwkruVBhCHARIsACVIiOz1H0CSptfBWx3_vs699Rw7Ax_ROR5aL_pgRyUznEZm1Fi7cIrYgtwaAslEEALw_wcB&gclsrc=aw.ds",
          image:
            "https://images.unsplash.com/photo-1606344728451-926a98d7252b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxheXN0b3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: "5",
          name: "News",
          link: "https://news.google.com/topstories?tab=rn&hl=en-IN&gl=IN&ceid=IN:en",
          image:
            "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: "6",
          name: "Meet",
          link: "https://meet.google.com/?hs=197&pli=1&authuser=0",
          image:
            "https://images.unsplash.com/photo-1612831820363-9b92f70109a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: "7",
          name: "Drive",
          link: "https://drive.google.com/drive/u/0/",
          image:
            "https://images.unsplash.com/photo-1506365558634-e0c754979231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwZHJpdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: "8",
          name: "Calendar",
          link: "https://calendar.google.com/calendar/u/0/r?tab=Cc&pli=1",
          image:
            "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80",
        },
      ],
    };
  },
};
</script>

<style>
div h1 {
  font-size: 3rem;
  margin: 2rem 0;
  text-align: center;
}
</style>
