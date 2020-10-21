<style lang="scss" scoped>
    @import "src/styles/variable.scss";
    /*sm*/
    @media (max-width: 767px) {
        .card {
            min-width: 19rem;
            max-width: 22rem;

            .place {
                height: 12rem;
            }

            .text-muted{
                font-size: 1rem;
            }

        }

    }

    @media (min-width: 767px) {
        .card {
            min-width: 25.6rem;
            max-width: 25.6rem;

            .place {
                height: 20rem;
            }

            .text-muted{
                font-size: 1.15rem;
            }
        }
    }

    .card {
        cursor: pointer;

        .place {
            width: 100%;
            background-position: center;
            background-size: cover;
        }

        .title {
            color: $default-color-secondary;
            font-size: $default-font-size !important;
            font-weight: bolder;
        }

        .description span {
            font-size: 1.6rem;
            color: $default-color-primary;
        }
    }
</style>

<template>
    <b-card class="card">
        <div v-if="clinic.avatar != null">
            <b-card-img alt="imagem clinic" class="place justify-content-center mb-4" :src="clinic.avatar.url"/>
        </div>
        <div v-else>
            <b-card-img alt="imagem clinic" class="place justify-content-center mb-4" :src="velho"/>
        </div>
        <b-card-title class="title">{{clinic.name}}</b-card-title>
        <b-card-text class="description">
            <b-card-text class="font-size-card">
                <span> Cidade: {{clinic.addresses.city}}</span>
                <br>
                <span> Rua: {{clinic.addresses.street}} </span>
                <br>
                <span> Numero: {{clinic.addresses.number}}</span>
            </b-card-text>
            <b-button @click="onSelect()" class="rounded-pill button-primary">Selecionar</b-button>
        </b-card-text>
        <template v-slot:footer>
            <small v-if="clinic.Users.length == 1" class="text-muted">{{clinic.Users.length}} especialista
                disponível</small>
            <small v-else class="text-muted">{{clinic.Users.length}} especialistas disponíveis</small>
        </template>
    </b-card>
</template>

<script>
    export default {
        data() {
            return {
                velho: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExIVFhUXFhUVFRYVFRUVFRcVFxcXFxUWFhcYHighGBslHRcVITElJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLTAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EAEcQAAEDAgMFBQYCBgkBCQAAAAEAAhEDIQQSMQVBUWFxBiKBkbETMqHB0fAUQiNSYnLh8QcVM1OCkqKywtIkJTRDRGNzo7P/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAJhEAAgICAgIBBAMBAAAAAAAAAAECEQMSITEEQRMUIjJRYXGRFf/aAAwDAQACEQMRAD8A9NC6uBOCIoJ6QcnOCG5qJgkroUe677VazUGc1NypntwuisOKwB2RL2ae14RRCNGI+RI01KypZFqNZDNNNNNTSxMNNajWQyxcyqUWIZahRrI5C5lRy1MyoUawWVPY9w0J++SdlSyIaobZhGYv9YeI+iVYgi3NCcyUJhPmpuNFFKzrQknFqUJ6EGroXYXIWox2UlxKUKDY5JNlOaJQoNiCScKZRG0kKNYEJwaeCOGAJy1BAiknspBPC61Yx1rU4Li6EQHV1cC6sYCnsuE0Lyr+lF9T8XSFNzmuFA3YS1wBqEatvEwqCHqpTSFGxG16IflLiCTA7riJ4S0EeMwpLXAiQZCwBhCaQiELhCAQLmIL6SlEJoasYhHDcCR0KIKbho8+N1bUNnlwBRnbNKNGKdlSoPzA+CIMVUGoB++asv6vPBDdgTwRAQ/x5GrT4XXW44HcfEI1TBnggPoQtbNSCe3CXtAo5ppj6S2zNRJmV0MXKDLI5RQrBZU1zU9rpEptQW8vVZhR1rEH2BDsp1m/qrLBMBeJ6qRjqAzB++CPofUJGrGXBW+xTTRUtyj167W+84DqQPVGgWCNNDdS5pjto0v1x4An0CG7adH9f/S/6IasOy/Y80TxUl+AhjX3vM/L5/BRGbRok/2jY5yPUBaapiKeScwIItBHhAS6v2Mmn0UDaYG5PCSSxhwXVxPpUy4gDUrGGqrxvaTCUXZamIYDoQJcQeYaCR4p/bvZVWpSaynU9nms4iZsLgG1iY+PFeMbY2O/DOyvg7wQZkbreCnKdOisYNqz3PB42lWbnpVGVG8WODhPAxoeSO1eCdn9vPwmIbUYJBhr2j8w4RxXu+GqZmh2UtkTDhBE3ErKVgcaDLoXF0JrFOpLqSxgQXln9JWzqtXH0SylUe32VOXMpvc0fpX+8WggW4r1MJezvIMHTSQRz+954qpMhbMpOIf7QzFauGWiKbajmsE6kd3jERuU3KBousZA1kyTMRqeC6QiAYQuFOXCEDDIXWNTgESixYJa4FvcCkJlAQ0dAnoBQikkksYblVVj297wVsq3aAufBFAZXEJrmopC4QgYfRbZDxuKbSbLjqYHMwT8ipFIWVftfvNAjRwdv3Tp5hOKPwWLY8ZQbi0HW0j/AIlSKrbffFUexaUOFvzN8sjR9VosQ2x8PUIXwYj1XKLVxzxIHmZJUiq4fLxmPX0QDRSrsZ9ECriKjtXHwt6KDWb6D1KtXUbDoPRQcWyPIepVUyTRApi67iWxK4KrWHM5wa0alxAA6komKc1wzNIcDoQQQRyI1VI9kZdEF5stbQPdHQLG4t0Aq/rtOWznC25xjTgp5/RXx/ZczFyhvxlMa1G/5gfRYqoXm9/goz50Jd8VzWdNG/w2LY+Qx0xE2I1mNRyKmUKpa4OCyXY2llfV5tZ6uWpRAQO1W0c2QHMwA2LRMuMRJIjcbHVUW0tn0cS1ueHAXmwPotJjcPnaW/X5LOYzCltQMc8QRMNnpB++K5s0XdnbgnGtWUuK2QzEYrB0GdwNf77t7QMxaJ1syBxJXq+PpNAEa6eCx2HpPzD2bWl1h3hIhaY0nQNJ3wmwv7SfkL7kxqQSyneEgqkTq6uOSWADCe1MCeCrIkxxTSiJrkTAyFxPXIQMcUjChAAUnCRe+mvK29FGLRmg6BdXGaDoupRhJJJFYxxV+P18lYKBj9fJFAZXlNK6VwrGJNLRCxImBz+RRaeiDXN/H79UwozCUAHHhMhGxjHZSSYFrD94RJ6cF3De8fJd2tVLaLyMsgDLnJDc2YBoJAJuYFgTe0rGRWtI0sYqN4ad1xNt8T15Kdh3h4JAiCW34tsVjMB2mzVslQU6TzJ71TNTLwCxgaco7ribh2UggWOaVNp9oaozANaQP7kU3AO1uM0zrqEsVYZSo0D6VvAeipNrEh0Di0eBaXH4qbgdompZxvwIAVh+GY7VoPUApkqYrdoxlXCU6hHtWuc0e6BmjNeXEt0gCBJ/MeKBhMP7Nzg0EMcA8NLQ0tMxEC09LRC1G28JTFMZWwc0Q2BJyuPe8ARfeVC2HgcxJeBljLlMuh1nC51sfj1XM21nTOpRT8Zoz2NOq0z/AHB+6PRWD9kUDrTafBQsSAAQNACB4LozS2o5sMNbKgMsg+yGbzUvchfmUvRX2WnZ9kOd0b81dKn2K4AuuNB81bgosCD02BZPE4Iux7w4mDTZkGgy6OnnmE+K1uGbY9VndqPLNoUiBOakWnoHyP8AcUk42imOWsrNFs/CCk2NTvKkl0Lj0GuTCKSSFbbdseHTITH6A8fVDDu/HIfNPPu9CiAY5JMe5JKE4E4Jkof4ynMZgekn4hWJE0JlR0JU3ggEKm7SdocPhQ1tWoA55ADd8H8zo91vM/yIP7KjtD2ufRdlpU2uIIBknf08EHYnbV1SoGVmNGYwMshw6gm48lmdrYfPWc6TBdIA13GLdR8VadnezP6X2rnEhsGCQSOMkajXcuOOWUpUjtlhUYWza7erubhqjmEghpMiZA3kRyVB2IphuJAYZlry8htyIm8HjHFZHtf2vq1i+hScWUmksIFnPgwcx4HgPGUbsBtp1J5quAcWNyDvEE5tZG+wEai5tw9KXhZHrJf4edDzca2i/wDT3VugXUPD1Q5rXDQgEeIlEBXOXEszsza1Z2Pq0H+6GvIbwDXNDXeId/qCD207WfhC2lTANRwLiTcMGgtvJv5Lzeh2sxTcUawJDiAHuJBa8DQZYiB9wlYVXJ6p2x7QuwVJrmUvaPcSBNmtAElzovGn1CoOzvbZuJDm4j2dKoNDOWm8X0zGzhGk31G8CB2l29+K2e2q5uV8vadQPy95vEEfNYLY+Jy1WuvvmJ0NoSSyNSHjBSjZ7RSxDH+49ro/VcD6Jzl53h8WKVYljoNzYjhMctFoMDtWqT33tJBIIAjSN3DXyTfJG6A8bq0athQcRoSBJEeoslQqSAU5yt6Ileza2RxDqVTdoAfKNVIrYj2zGv8AZvaGua9pdlEn3fdmdHO1HBU/aIR7ON+fed2T6qBSqO3OPgStDHJ8tgnliuKKJ/Z91XGNaWuyNqvLj3gHU2uzZQ4QWlwGWZkZp3LSOwwp/o2thjJDRLjAkmS5xJceZJK62o79Y+ZRW1ncfmmWJr2TeVforDjPZVA8lplrmsaDJzWIzD8o+nSbjYtZzgS92czYk5okaD9Wb6RaF0Yl8RMg2IIBBG8ERdJj4sGsgmSMjLnibIvG6oyyRUrJ2Io5hzExe3H5BOo4drdPHn1GiinGu5eSFWxRcC1wBBsRcSPAqf07uy/1Uarks8PWzEjcIjxn6Koxb/e8U6hiiwQ1rQOF+fO2pQqlQGZY2/N//Ui8E6E+ohZHY8AXbPUmPIJpxbpgQBysnuLf1B5u+qA9zRfIPN/1QeCRl5ERNwlR7nOa97jDe655gi9hwPrv4ids/wBrSLWumLl7nuBuZMQCRrzUCltY0pLWNvxLj80DFdo3/wB2zwL/APqU343Nlo+X9urNrg69visvtDaA/rSkwzamwcr1CePRWXZrEmowuIAvFugJ9QsrtGuP61v+U02//W1//JZquwJ30ek1HWQa53dEWoo7gc38kAo44xVHNp+BH1Ukbwq7EuP4ikN2V5J/ywrAHVYxGqLqo8NtKq7EVqT8sMJywIMEgtm/AhJBqjJ2Qzj2m7iXdTZScNjGub3bcVkqtUhM2VtPJVLSYBB6Wv8AVUJ2anbXaUYLB1Kli/OKdIHQveCRI3gBr3RvheK4zHvqvdUqPLnuOZzibkrX/wBJOKIZSpEQXH2sHUABzGkj8s532Xn1Yk90dT0V4PWJyZltOjebPxzcRh6cuh9J9OnUiSfZnM1r8ouRdjbaRzW82M9jSG03CTLXACXaXzD8o5nSyxX9DGCY/EVnuAJpU2gAgG9QuuPBhH+Ja2pVLsTmoim1jHuDQ8FoloDdC2WtLs922LSInVcWTFFT2uj1MOWcserV8HmW3sP7PEVmibVHx0mR8CETYGJAqN7wa6fze4eRO6eivu3mGotz4mm4ms11Ntdre/RANMzUEjMxsta25NzE71Q9nsTh61QB7vYukQ5oAvx71p6EL2IeVDXazxJ+Lk31o9f7K9rHHLhqrmMqsa0DM099oEB7e9BmDbwWgq7YLZmvTEZv/T1Do5rTpVvdzR48l5btPaFXDezq1RQxdKmYbWNPLWpnTK8tfcXFzN4m8Kds7tPRxlQU2Oy1H5mta+QC5z6TmgOEj8jtYuRxXDKUZcxPQjGUeJFZ/SLjC/FudmDssNkNLRIJBAEnfzWZ/E/tLVdsG0m5n52uLn1A9rSSIdUeQ5ruMEAxw3rPtwWGkOY8vAg5XXk7gd0SLg7uqm1zTKR56NDsgvIo4f2uam80qhBa3uNLA57dNcznxP7PFXe3uzlAuztGRoEPa1zmh3A+s8Vj9kbca2sZuby7fMg28itadotrtPe7rjBG/QW66qscSkQ8jyPivX0Z6js5wc57WAtblBAu5wfnEsiRIGQ+KudiYGoahJECARmd3hpYt3KTRc1oytgRoBzlEp1ctwt9Gruzn/6r61NVSqhoARGVZWbwm0hodZi3Ix6q1OIIgBpcTPAAADVxJFtBaTfxWnBxL4s0cnRF7Sa0/wDH/wAFWUyrHtIb0+j/APiqxhVMf4iZfyZLYUUKNTcjNKcmFBTpQhJsNTp6/U+CfIH7R8Q0dBYu6mx4BY1DiUMlGoMe+Qxrba91jQOG7VCeYMOYJGsANPm2x8ZWTM48WNlNcU9zbS0yN/EdeI5j4ILimTsVqhrihPT3FDcUQEHEhQXibKfiCodP3gkZRGw7NUSyjf8AMS70HyWL22f+8Xn9pn/4sHyXoODZlptHBoHwXne2Nm4g4p9UUnlprGHNaXd0OyjSdwXFN22dsVSR6sTInxQ5ulhXSxhM+62x4wJsnMFylHK7H/21Ejn6tCs2h3AKt2vT91w1AdHlPqAp2CrZ2AneFjFBjKWTFud+vSafEOLfQBJG2yf07T+w8eTmfVcSzfI0FwYbEXIAEk2AFyVZbI2TSoOFeuQXj3RqGHdA/M/nu3aSlSNPD087rk2nVzuQ5Kmq7RNR+ZxHIDQDh/FVRDoyPbjGVH4upUqNc0OMUy4EAsaABlOjtd36yoAWG838/VbjtfRZXw8ZSXsOZhHk5p5EfENWFoYZ2nsnj/A76Km37JfFb4Nz2ExmHw4dWdiclR3cNPOBLRcEjXUn7KvMd2vwxa4gh2oPGY4e87deOF15vRwVU2bRq9SxwHnCl1Nn1qbS51NwaBJPdsOkz8Fxzg5S2aZ6MJxxwUYtWerbOpZ8O3F4XLUIkupQ5mYRFVpbJb7QgCQW3gXMycbtXFbIrgn8G6hVsGupPLKczfMxlgIJNm6gSs3sjtJicI/NQc5oPvhw7jt2hGo3Hd8EXGbRZWdDKOVubM57r1InQum88546yVRtokkpW/0RNtYmjlcxj6tQCJc9wMubDWgQ1sAc5+Cj9nTUFUPY9zXM7weCQWneQRoVV1AQ5zdbmOf6p9F6J/R5sHDVGf8AaMSGOe7u0mFhrvETOW+Vu6SLwdIkv6pE27dlfWcS1omxhsbve0jn96rWU9hPbhSBRh5aXwQc5Ei1No0hoB6yts3BUcLaj7OiAAA9rGe2IAuHOeC4yZNiOm9V9Ta/tD/4oQ33gO9Pu90ucHEak8fU6cXIGOSizyN1EZsw38LBWdJ5DXwSOhjcJWs2wzB4gke3o0i1uvdgOEBriGyXanhoZ3RkqEDNTL2kyWtLTLX7gWzcg7puj0khKuzRdmh3De+bQcgPqrmq7KOirezz2NpkSM2Yy0kBwNhcG+5WNYH7+a748RPCzJvIzOMx7hVgb6g8CXX+JWkobVqtxZa13dd7EEESLtbJHA3WY2zWZ+Ia6mCcuU1JFswgiOO5Wezq4fiWuGhdS+AaD6LhjPaTi2e38ahFSS7o1naQ96n0d6hVjCrDtKe/T/dPqFWsK6Mf4ojl/NkhrkZjlFBRWOTiEsGBO91v8IN/NwM/uBNlPoBpLA8w0zN4/O/eNLq4/q6g7S/So4+hSuVDqDl0D2F7ruo9FW7UP6V/UegV/hcK2mCBNzNzKhYrZIe4uzkTeIBCRSW1lJQeqRS06haZH8Oh5JVwAbaESOh3eBBHgp+I2QWtLg8GATBbGnOfkqx7u63q7/ifmVVNN8EZRaVMY4phKTnITnJ2TXZHxJUbCMLnho1JjzsjYoqR2Xp5qxd+qCfHQeqlN0isFbNk0qNTkCZ1knTeZ6H1RWOXHaC+g4D5hcZ3FjSPdCQKDs4dyOZRn2QCAxIkIOxj+jHj6oG26jhSJAE2AnibLP4Hb1WkckDKaoaDGssB1jXRK3yMlaLjb1ntPJw88n0SVTW2wa7yIADZNgZ1jWdNfJJTbt2WUdeGYioypVdmeeg0AHADgp2GwIG5T6OGUynQXelR5l2Vj8HO5OpbO5K4bRRqdFExX0Nmjgh9tNnNZs6oQ3vvlrePun+Cv2U2tGZ5DR8T0CzPbLaorMyNEMaCGjeeZQfIeEeTbLwVWq7IKZLoEnQAcXHcIVtisDkApsIOpc6Dd3Llw/irzZTHCjULSLNcWyQ1swcsuNgCYvzVfhsc4d2tQ3QJOV7T0nXiCF5rySk7R6ixxUaZE2TsMPFSq9/fb7ugb7tpB10G/RRK2IfQxTHM7pDG8SJzOvfTetlszZjKozFo8DPnCpu1uEyQTbvActHQqRmycoKiFU21iDrVf/nfHlmhQMTjKjtXk9U1rHHRrj0BPoiDZ1Z2lJ3jDf8AdCZy/kTX9IDTrv8A1neZWj7KVg39IWB8PMAk2MNh2+SP47lU09h1z+UDq76Sr7ZWANKkQ4gnMTbQSGjfrokcl6HUH7QDHvc5xcbkmfp4blI2fXzC8xwPpwRG0c0qLgKMPg+U+KqnwTcUmXxptgW0A5I+yRFen/8AIz/cEBzYR9m1Wtq03EwA9hJ3ABwJJSYGoy5H8iLlDg1fac99n7p9VWsKm9pHTUZGmTrvKr2lehi/BHmZfzZIangoLSnyqEyU10t5tP8ApOnk6f8AOFxBp1IM/wAiN4KKW2kXHxHX66dNEOg9l9sI/oz++fRqrMZjKgqPAe4DM4RmMaqRsnHsYwtcSLkixM2HDfZVdepmc53FxPmSUsY/c7GnL7VQWpjKjhBe4jgSgVHWA8fP+EJC1z4Dj/BCe5USXom2/ZxxQXOTnFAcURRmINla9kaUMe7iQPK59Qqas+y02waeWi3nJ+MfJc+Z1E6cCuRYynPNkKs6ATyTnmy5UzsombNNjzUpyj4FsAKS9EBTdoakta0b3T5D+K882vi3Nr1A0xDyAbnLYA5RoDYXW82kc1UDh6ledbcYfxNYf+471RxJNvboGVyio69ln2beS55J3D1SXOzmHc3M474hJRytbuui+FSUFt2W7GI7WqEcWNyE/FEr0NTzNizNVo1Kj1dpR7tlXuehucmUUK5M7isQ52pJVHtkzTeL3EW1vaysqpVfjxLY4uH1+SXK6g3/AANiW00v5M1sjZ+JDm5SCRoDOURBEcNAtdh9nYmq9r6r6cCJhrS4gflnILdZi8cUXZFALQYRq8qLcj2pKkFwuFA0HyUPa2zc14Whw1H+SNUozaPsqzgmqI70zBjZjju+/uE8bI+/T76rXuwoFlHqURPwUvhSK/K2Zr+rQoW06TabdRvK15oR4rMdqMITMDUGL6fwW0SM5NlVsV2YG2836qEXxVn9r5wrDZjC0BsBsDlM+HiqjGvh7yAZDjrNrm6tFpvg55JpKzSPKj17A9CiYDFMqgkcpHX7K5jWQD0PRc7dHSlfJuNrYIPYHD3gLcxwKz7MQAcru6eB089FrKhsFntsYMOuNV1xyyj0cMsMZdjQU4FYvF7XNAwxxJ4NMt8fy+pXcH2vq/npsdzaSw+M5gfIK8fJj74IS8WS65NpKJTeQVn6PaegR3s7OMtkf6ZPwUzD7awzvdr0+jnBh8nwVZZIPpkZY5r0XPteIB8L+Yuml/IDwv5lCpuzCRccRcfBdKekSticUxxXSmOKIBjyo70ZxUeoswoi13IOG2vWonuOMbxqD1BtPPVOxBhVleu0bwel1KTS7KxTfRtMB2hbXpva+GvyOIj3XQ0m06GN38loGvBaCN68fqYq1h5/RemdnqxqYai6b5Gg9QId8QVxzlC/tO2EZ19xp6dgEaoVCNfuCeAsiOrS0HiPkgNRTA5qhPNY3HMBxFaf72p/uK2eEHePJeVYrE1G16xa8iatU6yLvcfdNvgoSlSLxVs2WFAAt9+KSz2G2y8C7Wu6EtPjr6BcSborqy1ldlCzJZl7B4YQlDe5cLkF70QHKjlHDMzmjnPp9SuYitHoBvJU3BUIAnUiTy4Bcnl5Eoa+2dnhY3Ke3pEvBMgxHDer3Ct3dPiqnDi8jUx6K2plcWM9HIXOF003I2UH7++KhYd446FSqb7j71sulHLJCrUbKI9g+CnOcIUSoYHwWYYkSqFV46iHaqwqutroVBrO3rnmdECkq4WDpdVlfZgqOJJIB3WHUStFWvZAFMTJ3rn2cejo1jLsiYLZ7KY7ojjqfVOrNuplVo4/xUWszeB1/kl2H1QantmsxmRuUgaFwJIHAGRbrMdNKbH4yrVnO8nlo0/4RAUtzvuLIdSkHbvv7+96b5JdCfFG7oz2IwsqM3C8FfOo+I+I5ITsL/BFTEljKWpSMRCgvYtJUp7iPvqotbBg7vv5qm5J42ULKQBzACeO9W1HaFUC1WoOj3D0K4cIkMKm3EcCfR2xW/vani4n1Uj+tq3945VYwxCK2gU3yv8AYvxL9Eh+1KxP9q7wKC/FVT/5rz1e4j1XPw5XfwxW+Rv2b40vQI1Tv14rhfKk/hVw4VK5D6siglX3ZrFOa7Jne0G8B7mgnwN1WU2I9PukHgQf5JHIooHsuHyupiCHQBJBm8b+aFWrNaO84N6kAR4rzmm9wMhxHRRNo4moQSXucbC5JtOgnQKnz8dE/p+ey02v2kq06zm0XNLQIJyhwJ33PyWYLcxLjqSSY4m6THXRQ1QlJsvGKRxrPFJGYEko9FsFwrqS+gPmwbigVCkksYjbN7znk3IkDkIBsr3eeiSS8XK7yS/s9/CksUa/RIoD5KdSNvP5JJJoCzLHBm33wClucQPBcSXQjnkEqGVGrO9Ckkswoqa7j6IDnac9UklzSOmJFP35pv356pJKLLIc7+Pkozvv4JJKZQjvFz98UJjjH3uSSRMPcNOeqZTFo5wkksAYWAi/P0UVokHkfqkkihX2AqtFjvvK6GifL5riSYmEY0SRG5ItCSSwTpFpTntESkkiAQC48adEkkQDC0FcCSSxi0wps390KHtE6dUkkGMiMAn0tUkkgUGJjRJJJYLP/9k= "
            };
        },
        name: "card-clinic",
        props: {
            id: Number,
            clinic: Object
        },
        methods: {
            onSelect() {
                this.$store.users = this.clinic.Users;
                const specialtieName = localStorage.getItem('searchSpecialtie');
                this.$router.push({path: `/especialidade/${JSON.parse(specialtieName).key}/${this.clinic.id}`})
            }
        }
    }
</script>
