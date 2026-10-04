export default function FullPublicationsList() {
  const groupedPublications = {
    "2025": [
      "Prem PN, Kurian GA. Effect of sodium thiosulfate on preventing renal ischemia-reperfusion injury in high-fat diet-fed rats: the role of renal mitochondrial quality. Biol Res. 2025 Aug 18;58(1):56.",
      "Prem PN, Swaminathan H, Kurian GA. The temporal relationship between mitochondrial quality and renal tissue recovery following ischemia-reperfusion injury. Heliyon. 2025 Jan 2.",
      "Ansari M, Prem PN, Gino ER, Kurian GA. Subsarcolemmal mitochondrial dysfunction aggravates ischemia-reperfusion injury in diabetic rat hearts on fructose and cholesterol diets. Indian Journal of Experimental Biology. 2025, 63 (04), 291-300."
    ],
    "2024": [
      "Prem PN, Kurian GA. Does cardiac impairment develop in ischemic renal surgery in rats depending on the reperfusion time?. Heliyon. 2024;10(10):e31389."
    ],
    "2023": [
      "Prem PN, Balu KK, Gandhi S, Kurian GA. Preparation of fisetin loaded mesoporous silica nanocarrier to attenuate ischemia reperfusion injury. Journal of Materials Research. 2023 Sep 11:1-3.",
      "Prem PN, Chellappan DR, Kurian GA. Impaired renal ischemia reperfusion recovery after bilateral renal artery ligation in rats treated with adenine: role of renal mitochondria. Journal of Bioenergetics and Biomembranes. 2023 Jul 1:1-4.",
      "Boovarahan SR, Kale SB, Prem PN, et al. CABG Patients Develop Global DNA Hypermethylation, That Negatively Affect the Mitochondrial Function and Promote Post-Surgical Cognitive Decline. Journal of Clinical Medicine. 2023.",
      "Prem PN, Chellappan DR, Kurian GA. High-fat diet-induced mitochondrial dysfunction is associated with loss of protection from ischemic preconditioning in renal ischemia reperfusion. Pflügers Archiv-European Journal of Physiology. 2023.",
      "Kurian GA, Ansari M, Prem PN. Diabetic cardiomyopathy attenuated the protective effect of ischaemic post-conditioning against ischaemia-reperfusion injury. Archives of physiology and biochemistry. 2023.",
      "Boovarahan SR, Balu K, Prem P, Sivakumar B, Kurian GA. DNA hypomethylation by fisetin preserves mitochondria functional genes. Functional & integrative genomics. 2023.",
      "Prem PN, Kurian GA. Cardiac damage following renal ischemia reperfusion injury increased with excessive consumption of high fat diet but enhanced the cardiac resistance to reperfusion stress. Heliyon. 2023.",
      "C Vedarathinam R, Rajkumar Y, Prem PN, Vetriselvan P, Kurian GA. High Susceptibility of Statin-Treated Heart to Ischemia-Reperfusion. Indian Journal of Pharmaceutical Sciences. 2023.",
      "Prem PN, Baskaran K, Johnson JT, Ravindran S, Kurian GA. Evaluation of prophylactic efficacy of sodium thiosulfate in combating I/R injury in rat brain. Naunyn-Schmiedeberg's Archives of Pharmacology. 2023.",
      "Yegneshwaran V, Prem PN, Boovarahan SR, Kurian GA. Therapeutic Effect of 5-Azacytidine to Attenuate the Ramifying Repercussions of Ischemia Reperfusion Injury. American Journal of Chemistry and Pharmacy. 2023."
    ],
    "2022": [
      "Prem PN, Sivakumar B, Boovarahan SR, Kurian GA. Recent advances in potential of Fisetin in the management of myocardial ischemia-reperfusion injury-A systematic review. Phytomedicine. 2022.",
      "Prem PN, Sivakumar B, Boovarahan SR, Kurian GA. Long-term administration of fisetin was not as effective as short term in ameliorating IR injury in isolated rat heart. Naunyn-schmiedeberg's Archives of Pharmacology. 2022.",
      "Ansari M, Prem PN, Kurian GA. Hydrogen sulfide postconditioning rendered cardioprotection against myocardial ischemia-reperfusion injury is compromised in rats with diabetic cardiomyopathy. Microvascular Research. 2022.",
      "Shanmugam K, Prem PN, Boovarahan SR, Sivakumar B, Kurian GA. FIsetin preserves interfibrillar mitochondria to protect against myocardial ischemia-reperfusion injury. Cell Biochemistry and Biophysics. 2022.",
      "C. Vedarathinam R, Rajkumar Y, Vetriselvan P, Prem PN, Ganapathy A, Kurian GA. Resveratrol-mediated cardioprotection against myocardial ischemia-reperfusion injury was revoked by statin-induced mitochondrial alterations. Drug and Chemical Toxicology. 2022."
    ],
    "2021": [
      "Prem PN, Kurian GA. High-fat diet increased oxidative stress and mitochondrial dysfunction induced by renal ischemia-reperfusion injury in rat. Frontiers in Physiology. 2021.",
      "Boovarahan SR, Venkatasubramanian H, Sharma N, Venkatesh S, Prem P, Kurian GA. Inhibition of PI3K/mTOR/KATP channel blunts sodium thiosulphate preconditioning mediated cardioprotection. Archives of Pharmacal Research. 2021.",
      "Kumar A, Boovarahan SR, Prem PN, Ramanathan M, Chellappan DR, Kurian GA. Evaluating the effects of carbon monoxide releasing molecule-2 against myocardial ischemia–reperfusion injury. Naunyn-Schmiedeberg's Archives of Pharmacology. 2021.",
      "Shanmugam K, Boovarahan SR, Prem P, Sivakumar B, Kurian GA. Fisetin attenuates myocardial ischemia-reperfusion injury by activating the reperfusion injury salvage kinase (RISK) signaling pathway. Frontiers in Pharmacology. 2021.",
      "Sivakumar, B., Boovarahan, S.R., Prem, P.N. and Kurian, G.A. Fisetin ameliorates ischemia re-oxygenation injury in H9c2 cardiomyocytes via targeting the PI3K signalling pathway. Phytomedicine Plus. 2021."
    ],
    "2019": [
      "Kannan S, Boovarahan SR, Rengaraju J, Prem P, Kurian GA. Attenuation of cardiac ischemia-reperfusion injury by sodium thiosulfate is partially dependent on the effect of cystathione beta synthase. Cell Biochemistry and Biophysics. 2019."
    ]
  };

  return (
    <section className="w-full py-20 px-8 bg-espresso text-cream flex justify-center" >
      <div className="max-w-[1000px] w-full">
        <h2 className="text-3xl font-semibold mb-12">Full Publications Log</h2>
        
        <div className="flex flex-col gap-12">
          {Object.entries(groupedPublications).map(([year, pubs]) => (
            <div key={year} className="flex flex-col md:flex-row gap-8">
              <div className="md:w-32 flex-shrink-0">
                <span className="text-3xl font-bold text-gold sticky top-32 block">{year}</span>
              </div>
              <div className="flex-1 flex flex-col gap-6">
                {pubs.map((pub, idx) => (
                  <div key={idx} className="pb-6 border-b border-blush/30 last:border-0 last:pb-0">
                    <p className="text-body-cream leading-relaxed text-sm md:text-base">{pub}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
