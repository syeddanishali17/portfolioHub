<div align="center">

<img src="media/banner.png" width="100%" alt="Hi, I'm Danish. Electrical engineering, MSc at Technische Universität Wien, data and supply chain" />

<a href="https://github.com/syeddanishali17">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1200&color=2F5A3E&center=true&vCenter=true&width=680&lines=I+build+tested%2C+useful+Python+tools;Signals+%C3%97+Routing+%C3%97+Stock+levels;MSc+%40+Technische+Universit%C3%A4t+Wien;Open+to+engineering%2C+data+and+supply+chain+roles" alt="Typing SVG" />
</a>

<p>
  <a href="https://www.linkedin.com/in/syeddanishali16"><img src="https://img.shields.io/badge/LinkedIn-syeddanishali16-2F5A3E?style=for-the-badge&labelColor=0F2A20" alt="LinkedIn" /></a>
  <a href="https://github.com/syeddanishali17/portfolioHub/raw/main/public/cv/Syed_Danish_Ali_CV.pdf"><img src="https://img.shields.io/badge/CV-Download%20PDF-3E6B4F?style=for-the-badge&logo=readthedocs&logoColor=white&labelColor=0F2A20" alt="Download CV" /></a>
  <a href="mailto:danishraza16@gmail.com"><img src="https://img.shields.io/badge/Email-Say%20hi-173D30?style=for-the-badge&logo=gmail&logoColor=white&labelColor=0F2A20" alt="Email" /></a>
  <a href="https://github.com/syeddanishali17/portfolioHub"><img src="https://img.shields.io/badge/Portfolio-source-1E4A3B?style=for-the-badge&logo=github&logoColor=white&labelColor=0F2A20" alt="Portfolio source" /></a>
</p>

<p>
  <img src="https://img.shields.io/badge/Studying-MSc%20%40%20TU%20Wien-1E4A3B?style=flat-square&labelColor=0F2A20" alt="Studying at Technische Universität Wien" />
  <img src="https://img.shields.io/badge/Open%20to-Engineering%2C%20data%20%26%20supply%20chain%20roles-2F5A3E?style=flat-square&labelColor=0F2A20" alt="Open to roles" />
  <img src="https://img.shields.io/badge/Based%20in-Vienna-3E6B4F?style=flat-square&labelColor=0F2A20" alt="Based in Vienna" />
</p>

</div>

---

## About me

Electrical engineer, now doing my MSc in Information and Communication Engineering at **Technische Universität Wien**.
I build tools that turn messy engineering and operations problems into decisions you can check, right where **signals, data and supply chains** meet.

<img src="media/dot.svg" height="10" alt="" /> &nbsp;Started on a factory floor at **Mondelēz** (LU Biscuits), tracking why production lines stopped and how to keep them running<br/>
<img src="media/dot.svg" height="10" alt="" /> &nbsp;Then product and supply chain work: dark stores and delivery zones at **Airlift**, seller logistics in five markets at **Alibaba (Daraz)**<br/>
<img src="media/dot.svg" height="10" alt="" /> &nbsp;**MS in Supply Chain and Retail Management** at LUMS, with a thesis on routing warehouse workers using MILP<br/>
<img src="media/dot.svg" height="10" alt="" /> &nbsp;I test everything against something simpler, and I label synthetic data as synthetic<br/>
<img src="media/dot.svg" height="10" alt="" /> &nbsp;English (C1) · German (A1, learning)

## What I'm working on

<table>
  <tr>
    <td width="50%" valign="top">
      <h3><img src="media/dot.svg" height="12" alt="" /> ECG Noise Stress-Test Bench</h3>
      Heartbeat detectors are usually judged on clean recordings. My bench mixes real electrode, muscle and baseline noise into annotated ECG and watches five open-source detectors until they break. <b>2,820 runs over 61 hours of noisy ECG.</b> Research and teaching tool, not a medical device.
      <br/><br/><a href="https://github.com/syeddanishali17/BioLab-ECG">Code →</a>
    </td>
    <td width="50%" valign="top">
      <h3><img src="media/dot.svg" height="12" alt="" /> MSc at Technische Universität Wien</h3>
      Information and Communication Engineering. Current courses include Introduction to Biostatistics and Modern Sensor Technologies, which feed straight into the biosignal work.
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3><img src="media/dot.svg" height="12" alt="" /> LastMile Lab</h3>
      Which van takes which order, and in what order to drive? A simple nearest-stop rule against Google OR-Tools for a made-up Vienna delivery company. In a synthetic 24-customer scenario the optimised plan is <b>20.6% shorter</b>.
      <br/><br/><a href="https://lastmilelab.streamlit.app/">Live app ↗</a> · <a href="https://github.com/syeddanishali17/LastMileLab2">Code →</a>
    </td>
    <td width="50%" valign="top">
      <h3><img src="media/dot.svg" height="12" alt="" /> DemandPlanningLab</h3>
      Turns weekly forecasts into reorder decisions for 48 synthetic products. Built in Excel first, then in Python, and checked to match for every product. Better service in the backtest, <b>95.8% vs 92.8% fill rate</b>, at the cost of more stock.
      <br/><br/><a href="https://demandplanninglab.streamlit.app/">Live app ↗</a> · <a href="https://github.com/syeddanishali17/DemandPlanningLab">Code →</a>
    </td>
  </tr>
</table>

## LastMile Lab: from orders to van routes

<p align="center">
  <img src="media/lastmilelab.webp" width="100%" alt="LastMile Lab route comparison: the nearest-neighbour baseline at 122.4 km next to the OR-Tools plan at 97.2 km for the same 24 synthetic Vienna customers" />
</p>

<img src="media/dot.svg" height="10" alt="" /> &nbsp;**Baseline first:** a deterministic, capacity-aware nearest-neighbour rule, so the optimiser has something honest to beat<br/>
<img src="media/dot.svg" height="10" alt="" /> &nbsp;**Solver behind an API:** OR-Tools runs in a FastAPI service; the Streamlit interface never solves anything itself<br/>
<img src="media/dot.svg" height="10" alt="" /> &nbsp;**Reconcilable numbers:** loads and distances are rebuilt from the returned routes and checked independently<br/>
<img src="media/dot.svg" height="10" alt="" /> &nbsp;**More than distance:** route crossings and territory overlap, because dispatchers care how a plan looks

## DemandPlanningLab: from forecast to purchase order

<p align="center">
  <img src="media/demandplanninglab.webp" width="100%" alt="DemandPlanningLab dashboard: stockout risks, orders to place, inventory value and forecast accuracy for 48 synthetic SKUs" />
</p>

<img src="media/dot.svg" height="10" alt="" /> &nbsp;**Explainable forecasts:** four simple methods scored walk-forward, so no future data leaks into past decisions<br/>
<img src="media/dot.svg" height="10" alt="" /> &nbsp;**Inventory logic:** safety stock, reorder points and EOQ rounded to the case pack<br/>
<img src="media/dot.svg" height="10" alt="" /> &nbsp;**Excel as the referee:** 69 tests check the Python engine against the workbook for every SKU<br/>
<img src="media/dot.svg" height="10" alt="" /> &nbsp;**Honest trade-off:** 71 vs 145 stockout SKU-weeks, but 76% more average inventory

## Tech stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=python,fastapi,docker,git,github,githubactions&perline=6" alt="Tech stack" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/pandas-Data-173D30?style=for-the-badge&logo=pandas&logoColor=white&labelColor=0F2A20" alt="pandas" />
  <img src="https://img.shields.io/badge/SQL-BigQuery-1E4A3B?style=for-the-badge&logo=googlebigquery&logoColor=white&labelColor=0F2A20" alt="SQL and BigQuery" />
  <img src="https://img.shields.io/badge/Streamlit-Apps-2F5A3E?style=for-the-badge&logo=streamlit&logoColor=white&labelColor=0F2A20" alt="Streamlit" />
  <img src="https://img.shields.io/badge/OR--Tools-Routing-3E6B4F?style=for-the-badge&labelColor=0F2A20" alt="OR-Tools" />
  <img src="https://img.shields.io/badge/Excel-Models-173D30?style=for-the-badge&logoColor=white&labelColor=0F2A20" alt="Excel" />
  <img src="https://img.shields.io/badge/Power%20BI-Reporting-1E4A3B?style=for-the-badge&logoColor=white&labelColor=0F2A20" alt="Power BI" />
  <img src="https://img.shields.io/badge/Claude-AI%20pair%20programming-2F5A3E?style=for-the-badge&logo=claude&logoColor=white&labelColor=0F2A20" alt="Claude" />
</p>

## More projects

<table>
  <tr>
    <td width="33%" valign="top">
      <h3><img src="media/dot.svg" height="12" alt="" /> BloodTypeLab</h3>
      Agent-based simulation of ABO and RhD inheritance, starting from published Austrian blood-group shares. Synthetic population, not a forecast.
      <br/><br/><a href="https://bloodtypelab-edu.streamlit.app/">Live app ↗</a> · <a href="https://github.com/syeddanishali17/BloodtypeLab-edu">Code →</a>
    </td>
    <td width="33%" valign="top">
      <h3><img src="media/dot.svg" height="12" alt="" /> CircularLoop Lab</h3>
      Ranks repair, reuse, refurbishment, remanufacturing and recycling for industrial components from lifecycle data, with transparent rules.
      <br/><br/><a href="https://github.com/syeddanishali17/circularloopLab">Code →</a>
    </td>
    <td width="33%" valign="top">
      <h3><img src="media/dot.svg" height="12" alt="" /> Signal Tutor</h3>
      Interactive lessons on sensor electronics, signal conditioning and circuits: explore, name, derive, break it, check, explain it.
      <br/><br/><a href="https://github.com/syeddanishali17/SignalTutor">Code →</a>
    </td>
  </tr>
</table>

---

<div align="center">
  <sub>Based in Vienna · Build it, test it, explain it.</sub>
</div>
