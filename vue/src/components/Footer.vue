<template>
    <div class="footer">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="/">Signpost for Connpass</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="https://connpass.com/">connpass</b-nav-item>
                    <b-nav-item href="#" v-b-modal.modal-about>about</b-nav-item>
                    <b-modal id="modal-about" title="about" hide-footer>
                        <p class="my-4">
                            このサイトは<a href="https://connpass.com/">connpass - エンジニアをつなぐ IT勉強会支援プラットフォーム</a>
                            が提供する<a href="https://connpass.com/about/api/">WebAPI</a>を活用し、イベント情報を地図上で可視化する事を目的としています。
                            ご意見・お問い合わせは<a href="https://twitter.com/kanahiro_iguchi">Twitterアカウント</a>までどうぞ。
                        </p>
                    </b-modal>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
            }
        },
        created() {
        },
        methods: {
        }
    }
</script>

<style scoped>
    .footer {
        margin: 50px 0 0 0;
    }
</style>