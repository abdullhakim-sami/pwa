import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/

  static styles = [
    styles,
    css`
    #welcomeBar {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    #welcomeCard,
    #infoCard {
      padding: 18px;
      padding-top: 0px;
    }

    sl-card::part(footer) {
      display: flex;
      justify-content: flex-end;
    }

    @media(min-width: 750px) {
      sl-card {
        width: 70vw;
      }
    }


    @media (horizontal-viewport-segments: 2) {
      #welcomeBar {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }

      #welcomeCard {
        margin-right: 64px;
      }
    }
  `];

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <div >

            <div >

            </div>

            <sl-tab-group placement="start">
            <sl-tab slot="nav" panel="كتاب الصلاة">كتاب الصلاة</sl-tab>
            <sl-tab slot="nav" panel="كتاب الزكاة">كتاب الزكاة</sl-tab>
            <sl-tab slot="nav" panel="كتاب الصوم">كتاب الصوم</sl-tab>
            <sl-tab slot="nav" panel="كتاب الحج">كتاب الحج</sl-tab>


            <sl-tab-panel name="كتاب الصلاة">

                    <sl-tab-group placement="top">
                        <sl-tab slot="nav" panel="باب صلاة الجمعة"> باب صلاة الجمعة </sl-tab>
                        <sl-tab slot="nav" panel="باب صلاةالفجر">باب صلاة الفجر </sl-tab>
                        <sl-tab slot="nav" panel="باب صلاة النافلة">باب صلاة النافلة</sl-tab>


                        <sl-tab-panel name="باب صلاة الجمعة">


                            الاحاديث و شروحها لباب صلاة الجمعة

                        </sl-tab-panel>
                        <sl-tab-panel name="باب صلاةالفجر">

                            الاحاديث و شروحها لباب صلاة الفجر


                        </sl-tab-panel>
                        <sl-tab-panel name="باب صلاة النافلة">
                            الاحاديث و شروحها لباب صلاة النافلة

                        </sl-tab-panel>

                    </sl-tab-group>

            </sl-tab-panel>



            <sl-tab-panel name="كتاب الزكاة">



            This is the custom tab panel.




            </sl-tab-panel>



            <sl-tab-panel name="كتاب الصوم">





            This is the advanced tab panel.




            </sl-tab-panel>
            <sl-tab-panel name="كتاب الحج">



            This is a disabled tab panel.




            </sl-tab-panel>
        </sl-tab-group>


        </div>
      </main>
    `;
  }
}
