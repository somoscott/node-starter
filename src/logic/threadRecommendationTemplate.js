const templateString = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Coats Thread Recommendation</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <div class="header">
        <img src="coats_logo.svg"/>
        <h1>Coats Technical Services</h1>
        <div>
            Prepared by:
            {{techProfile.fullName}} | {{recommendation.operations.updatedAt}} | Page 1 of {{pageCount}}
        </div>
    </div>
    <div class="block">
        <div class="customer-details">
            <h2>Customer details</h2>
            <div class="tile">
                <h5>Customer</h5>
                <h6>{{customerProfile.companyName}}</h6>
            </div>
            <div class="tile">
                <h5>Brand</h5>
                <h6>???</h6>
            </div>
            <div class="tile">
                <h5>Country</h5>
                <h6>{{customerProfile.country}}</h6>
            </div>
            <div class="tile">
                <h5>Contact</h5>
                <h6>{{customerProfile.fullName}}</h6>
            </div>
            <div class="tile">
                <h5>Title/position</h5>
                <h6>{{customerProfile.title}}</h6>
            </div>
            <div class="tile">
                <h5>Department</h5>
                <h6>{{customerProfile.department}}</h6>
            </div>
            <div class="tile">
                <h5>Segment</h5>
                <h6>{{recommendation.segment}}</h6>
            </div>
            <div class="tile">
                <h5>Garment Type</h5>
                <h6>{{recommendation.garmentType}}</h6>
            </div>
            <div class="tile">
                <h5>Style Code</h5>
                <h6>{{recommendation.styleCode}}</h6>
            </div>
            <div class="tile">
                <h5>Fabric Type</h5>
                <h6>{{recommendation.fabricType}}</h6>
            </div>
            <div class="tile">
                <h5>Fabric Composition</h5>
                <h6>{{recommendation.fabricComposition}}</h6>
            </div>
            <div class="tile">
                <h5>Fabric Weight</h5>
                <h6>{{recommendation.fabricWeight}} {{recommendation.fabricWeightUnit}}</h6>
            </div>
            <div class="tile">
                <h5>Post Sewing Treatment Type</h5>
                <h6>{{recommendation.postSewingTreatmentType}}</h6>
            </div>
            <div class="tile">
                <h5>Post Sewing Treatment</h5>
                <h6>{{recommendation.postSewingTreatment}}</h6>
            </div>
        </div>
        <div class="garment-image">
            <img src="missing.png"/>
        </div>
    </div>
    {{#each recommendation.operations }}
        {{> operationsPartial }}
    {{/each}}
</body>
</html>`

const observationPartial =
`{{#if observation}}
<div class="observations">
    <h2>Observations</h2>
    <p>{{observation}}</p>
</div>
{{/if}}`

const operationPartial =
`<div class="block">
<div class="operations">
    <h2>Operations</h2>
    <div class="tile">
        <h5>Description</h5>
        <h6>{{description}}</h6>
    <div>
    <div class="tile">
        <h5>Stitch Type</h5>
        <h6>{{stitchType}}</h6>
    <div>
    <div class="tile tile-double">
        <h5>Machine Type</h5>
        <h6>????</h6>
    <div>
    <div class="tile">
        <h5>Stitch Rate</h5>
        <h6>{{stitchRate}} {{stitchRateUnit}}</h6>
    <div>
    <div class="tile">
        <h5>Bight</h5>
        <h6>{{bightRate}} {{bightRateUnit}}</h6>
    <div>
    <div class="tile">
        <h5>Needle Size</h5>
        <h6>{{needleSize}}</h6>
    <div>
    <div class="tile">
        <h5>Needle Point</h5>
        <h6>{{needlePoint}}</h6>
    <div>
    <div class="needle-looper-spreader">
        <div>
            <h2>Needle</h2>
            <h5>Brand</h5>
            <h6>{{needleBrand}}</h6>
            <h5>Tex</h5>
            <h6>{{needleBrandSize}}</h6>
        </div>
        <div>
            <h2>Looper</h2>
            <h5>Brand</h5>
            <h6>{{looperBrand}}</h6>
            <h5>Tex</h5>
            <h6>{{looperBrandSize}}</h6>
        </div>
        <div>
            <h2>Spreader</h2>
            <h5>Brand</h5>
            <h6>{{spreaderBrand}}</h6>
            <h5>Tex</h5>
            <h6>{{spreaderBrandSize}}</h6>
        </div>
    </div>
   ${observationPartial}
</div>
<div class="stitch-image">
    <img src="missing-stitch.png"/>
</div>
</div>`

export { templateString, operationPartial }