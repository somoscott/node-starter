const templateString = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Coats Thread Recommendation</title>
</head>
<body>
    <div class="header">
        <img src="coats_logo.svg"/>
        <h1>Coats Technical Services</h1>
    </div>
    <div class="block">
        <div class="customer-details">
            <h2>Customer details</h2>
            <div class="tile">
                <h5>Customer</h5>
                <h6>{{customerProfile.fullName}}</h6>
            </div>
            <div class="tile">
                <h5>Brand</h5>
                <h6>{{customerProfile.fullName}}</h6>
            </div>
            <div class="tile">
                <h5>Country</h5>
                <h6>{{customerProfile.fullName}}</h6>
            </div>
            <div class="tile">
                <h5>Contact</h5>
                <h6>{{customerProfile.fullName}}</h6>
            </div>
            <div class="tile">
                <h5>Title/position</h5>
                <h6>{{customerProfile.fullName}}</h6>
            </div>
            <div class="tile">
                <h5>Department</h5>
                <h6>{{customerProfile.fullName}}</h6>
            </div>
            <div class="tile">
                <h5>Segment</h5>
                <h6>{{customerProfile.fullName}}</h6>
            </div>
            <div class="tile">
                <h5>Garment Type</h5>
                <h6>{{customerProfile.fullName}}</h6>
            </div>
            <div class="tile">
                <h5>Style Code</h5>
                <h6>{{customerProfile.fullName}}</h6>
            </div>
            <div class="tile">
                <h5>Fabtric Type</h5>
                <h6>{{customerProfile.fullName}}</h6>
            </div>
            <div class="tile">
                <h5>Fabric Composition</h5>
                <h6>{{customerProfile.fullName}}</h6>
            </div>
            <div class="tile">
                <h5>Fabric Weight</h5>
                <h6>{{customerProfile.fullName}}</h6>
            </div>
            <div class="tile">
                <h5>Post Sewing Treatment Type</h5>
                <h6>{{customerProfile.fullName}}</h6>
            </div>
            <div class="tile">
                <h5>Post Sewing Treatment</h5>
                <h6>{{customerProfile.fullName}}</h6>
            </div>
        </div>
        <div class="garment-image">
            <img src="missing.png"/>
        </div>
    </div>
    <div class="block">
        <div class="operations">
            <h2>Operations</h2>
            <div class="tile">
                <h5>Description</h5>
                <h6>tbd</h6>
            <div>
            <div class="tile">
                <h5>Stitch Type</h5>
                <h6>tbd</h6>
            <div>
            <div class="tile tile-double">
                <h5>Machine Type</h5>
                <h6>tbd</h6>
            <div>
            <div class="tile">
                <h5>Stitch Rate</h5>
                <h6>tbd</h6>
            <div>
            <div class="tile">
                <h5>Bight</h5>
                <h6>tbd</h6>
            <div>
            <div class="tile">
                <h5>Needle Size</h5>
                <h6>tbd</h6>
            <div>
            <div class="tile">
                <h5>Needle Point</h5>
                <h6>tbd</h6>
            <div>
            <div class="needle-looper-spreader">
                <div>
                    <h2>Needle</h2>
                    <h5>Brand</h5>
                    <h6>tbd</h6>
                    <h5>Tex</h5>
                    <h6>tbd</h6>
                </div>
                <div>
                    <h2>Looper</h2>
                    <h5>Brand</h5>
                    <h6>tbd</h6>
                    <h5>Tex</h5>
                    <h6>tbd</h6>
                </div>
                <div>
                    <h2>Spreader</h2>
                    <h5>Brand</h5>
                    <h6>tbd</h6>
                    <h5>Tex</h5>
                    <h6>tbd</h6>
                </div>
            </div>
            <div class="observations">
                <h2>Observations</h2>
                <p>Lorem ipsum dolor sit...</p>
            </div>
        </div>
        <div class="stitch-image">
            <img src="missing-stitch.png"/>
        </div>
    </div>
</body>
</html>`


const observationsPartial =
`{{#if recommendation.observations}}
<h3>Observations:</h3>
<p>{{recommendation.observations[0]}}</p>
{{/if}}`

export { templateString }