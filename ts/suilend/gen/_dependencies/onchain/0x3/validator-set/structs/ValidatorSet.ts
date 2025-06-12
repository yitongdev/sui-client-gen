import * as reified from "../../../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
  ToTypeStr as ToPhantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Vector } from "../../../../../_framework/vector.js";
import { Bag } from "../../../0x2/bag/structs/index.js";
import { ID } from "../../../0x2/object/structs/index.js";
import { TableVec } from "../../../0x2/table-vec/structs/index.js";
import { Table } from "../../../0x2/table/structs/index.js";
import { VecMap } from "../../../0x2/vec-map/structs/index.js";
import { PKG_V21 } from "../../constants.js";
import { ValidatorWrapper } from "../../validator-wrapper/structs/index.js";
import { Validator } from "../../validator/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isValidatorSet(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::validator_set::ValidatorSet`;
}

export interface ValidatorSetFields {
  totalStake: ToField<"u64">;
  activeValidators: ToField<Vector<Validator>>;
  pendingActiveValidators: ToField<TableVec<ToPhantom<Validator>>>;
  pendingRemovals: ToField<Vector<"u64">>;
  stakingPoolMappings: ToField<Table<ToPhantom<ID>, "address">>;
  inactiveValidators: ToField<Table<ToPhantom<ID>, ToPhantom<ValidatorWrapper>>>;
  validatorCandidates: ToField<Table<"address", ToPhantom<ValidatorWrapper>>>;
  atRiskValidators: ToField<VecMap<"address", "u64">>;
  extraFields: ToField<Bag>;
}

export type ValidatorSetReified = Reified<ValidatorSet, ValidatorSetFields>;

/**
 * Move struct: `ValidatorSet`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::validator_set`
 */
export class ValidatorSet implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::validator_set::ValidatorSet`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ValidatorSet.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::validator_set::ValidatorSet`;
  readonly $typeArgs: [];
  readonly $isPhantom = ValidatorSet.$isPhantom;

  readonly totalStake: ToField<"u64">;
  readonly activeValidators: ToField<Vector<Validator>>;
  readonly pendingActiveValidators: ToField<TableVec<ToPhantom<Validator>>>;
  readonly pendingRemovals: ToField<Vector<"u64">>;
  readonly stakingPoolMappings: ToField<Table<ToPhantom<ID>, "address">>;
  readonly inactiveValidators: ToField<Table<ToPhantom<ID>, ToPhantom<ValidatorWrapper>>>;
  readonly validatorCandidates: ToField<Table<"address", ToPhantom<ValidatorWrapper>>>;
  readonly atRiskValidators: ToField<VecMap<"address", "u64">>;
  readonly extraFields: ToField<Bag>;

  private constructor(typeArgs: [], fields: ValidatorSetFields) {
    this.$fullTypeName = composeSuiType(
      ValidatorSet.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::validator_set::ValidatorSet`;
    this.$typeArgs = typeArgs;

    this.totalStake = fields.totalStake;
    this.activeValidators = fields.activeValidators;
    this.pendingActiveValidators = fields.pendingActiveValidators;
    this.pendingRemovals = fields.pendingRemovals;
    this.stakingPoolMappings = fields.stakingPoolMappings;
    this.inactiveValidators = fields.inactiveValidators;
    this.validatorCandidates = fields.validatorCandidates;
    this.atRiskValidators = fields.atRiskValidators;
    this.extraFields = fields.extraFields;
  }

  static reified(): ValidatorSetReified {
    return {
      typeName: ValidatorSet.$typeName,
      fullTypeName: composeSuiType(
        ValidatorSet.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::validator_set::ValidatorSet`,
      typeArgs: [] as [],
      isPhantom: ValidatorSet.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ValidatorSet.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ValidatorSet.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ValidatorSet.fromBcs(data),
      bcs: ValidatorSet.bcs,
      fromJSONField: (field: any) => ValidatorSet.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ValidatorSet.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => ValidatorSet.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => ValidatorSet.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => ValidatorSet.fetch(client, id),
      new: (fields: ValidatorSetFields) => {
        return new ValidatorSet([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ValidatorSet.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ValidatorSet>> {
    return phantom(ValidatorSet.reified());
  }
  static get p() {
    return ValidatorSet.phantom();
  }

  static get bcs() {
    return bcs.struct("ValidatorSet", {
      total_stake: bcs.u64(),
      active_validators: bcs.vector(Validator.bcs),
      pending_active_validators: TableVec.bcs,
      pending_removals: bcs.vector(bcs.u64()),
      staking_pool_mappings: Table.bcs,
      inactive_validators: Table.bcs,
      validator_candidates: Table.bcs,
      at_risk_validators: VecMap.bcs(
        bcs.bytes(32).transform({
          input: (val: string) => fromHex(val),
          output: (val: Uint8Array) => toHex(val),
        }),
        bcs.u64(),
      ),
      extra_fields: Bag.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): ValidatorSet {
    return ValidatorSet.reified().new({
      totalStake: decodeFromFields("u64", fields.total_stake),
      activeValidators: decodeFromFields(
        reified.vector(Validator.reified()),
        fields.active_validators,
      ),
      pendingActiveValidators: decodeFromFields(
        TableVec.reified(reified.phantom(Validator.reified())),
        fields.pending_active_validators,
      ),
      pendingRemovals: decodeFromFields(reified.vector("u64"), fields.pending_removals),
      stakingPoolMappings: decodeFromFields(
        Table.reified(reified.phantom(ID.reified()), reified.phantom("address")),
        fields.staking_pool_mappings,
      ),
      inactiveValidators: decodeFromFields(
        Table.reified(reified.phantom(ID.reified()), reified.phantom(ValidatorWrapper.reified())),
        fields.inactive_validators,
      ),
      validatorCandidates: decodeFromFields(
        Table.reified(reified.phantom("address"), reified.phantom(ValidatorWrapper.reified())),
        fields.validator_candidates,
      ),
      atRiskValidators: decodeFromFields(
        VecMap.reified("address", "u64"),
        fields.at_risk_validators,
      ),
      extraFields: decodeFromFields(Bag.reified(), fields.extra_fields),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ValidatorSet {
    if (!isValidatorSet(item.type)) {
      throw new Error("not a ValidatorSet type");
    }

    return ValidatorSet.reified().new({
      totalStake: decodeFromFieldsWithTypes("u64", item.fields.total_stake),
      activeValidators: decodeFromFieldsWithTypes(
        reified.vector(Validator.reified()),
        item.fields.active_validators,
      ),
      pendingActiveValidators: decodeFromFieldsWithTypes(
        TableVec.reified(reified.phantom(Validator.reified())),
        item.fields.pending_active_validators,
      ),
      pendingRemovals: decodeFromFieldsWithTypes(
        reified.vector("u64"),
        item.fields.pending_removals,
      ),
      stakingPoolMappings: decodeFromFieldsWithTypes(
        Table.reified(reified.phantom(ID.reified()), reified.phantom("address")),
        item.fields.staking_pool_mappings,
      ),
      inactiveValidators: decodeFromFieldsWithTypes(
        Table.reified(reified.phantom(ID.reified()), reified.phantom(ValidatorWrapper.reified())),
        item.fields.inactive_validators,
      ),
      validatorCandidates: decodeFromFieldsWithTypes(
        Table.reified(reified.phantom("address"), reified.phantom(ValidatorWrapper.reified())),
        item.fields.validator_candidates,
      ),
      atRiskValidators: decodeFromFieldsWithTypes(
        VecMap.reified("address", "u64"),
        item.fields.at_risk_validators,
      ),
      extraFields: decodeFromFieldsWithTypes(Bag.reified(), item.fields.extra_fields),
    });
  }

  static fromBcs(data: Uint8Array): ValidatorSet {
    return ValidatorSet.fromFields(ValidatorSet.bcs.parse(data));
  }

  toJSONField() {
    return {
      totalStake: this.totalStake.toString(),
      activeValidators: fieldToJSON<Vector<Validator>>(
        `vector<${Validator.$typeName}>`,
        this.activeValidators,
      ),
      pendingActiveValidators: this.pendingActiveValidators.toJSONField(),
      pendingRemovals: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.pendingRemovals),
      stakingPoolMappings: this.stakingPoolMappings.toJSONField(),
      inactiveValidators: this.inactiveValidators.toJSONField(),
      validatorCandidates: this.validatorCandidates.toJSONField(),
      atRiskValidators: this.atRiskValidators.toJSONField(),
      extraFields: this.extraFields.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): ValidatorSet {
    return ValidatorSet.reified().new({
      totalStake: decodeFromJSONField("u64", field.totalStake),
      activeValidators: decodeFromJSONField(
        reified.vector(Validator.reified()),
        field.activeValidators,
      ),
      pendingActiveValidators: decodeFromJSONField(
        TableVec.reified(reified.phantom(Validator.reified())),
        field.pendingActiveValidators,
      ),
      pendingRemovals: decodeFromJSONField(reified.vector("u64"), field.pendingRemovals),
      stakingPoolMappings: decodeFromJSONField(
        Table.reified(reified.phantom(ID.reified()), reified.phantom("address")),
        field.stakingPoolMappings,
      ),
      inactiveValidators: decodeFromJSONField(
        Table.reified(reified.phantom(ID.reified()), reified.phantom(ValidatorWrapper.reified())),
        field.inactiveValidators,
      ),
      validatorCandidates: decodeFromJSONField(
        Table.reified(reified.phantom("address"), reified.phantom(ValidatorWrapper.reified())),
        field.validatorCandidates,
      ),
      atRiskValidators: decodeFromJSONField(
        VecMap.reified("address", "u64"),
        field.atRiskValidators,
      ),
      extraFields: decodeFromJSONField(Bag.reified(), field.extraFields),
    });
  }

  static fromJSON(json: Record<string, any>): ValidatorSet {
    if (json.$typeName !== ValidatorSet.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ValidatorSet.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ValidatorSet {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isValidatorSet(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a ValidatorSet object`);
    }
    return ValidatorSet.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ValidatorSet {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isValidatorSet(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ValidatorSet object`);
      }

      return ValidatorSet.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ValidatorSet.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ValidatorSet> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching ValidatorSet object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isValidatorSet(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ValidatorSet object`);
    }

    return ValidatorSet.fromSuiObjectData(res.data);
  }
}
