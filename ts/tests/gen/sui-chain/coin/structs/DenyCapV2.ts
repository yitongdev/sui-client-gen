import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isDenyCapV2(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::coin::DenyCapV2` + "<");
}

export interface DenyCapV2Fields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  allowGlobalPause: ToField<"bool">;
}

export type DenyCapV2Reified<T0 extends PhantomTypeArgument> = Reified<
  DenyCapV2<T0>,
  DenyCapV2Fields<T0>
>;

/**
 * Move struct: `DenyCapV2`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class DenyCapV2<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::coin::DenyCapV2`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = DenyCapV2.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::coin::DenyCapV2<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = DenyCapV2.$isPhantom;

  readonly id: ToField<UID>;
  readonly allowGlobalPause: ToField<"bool">;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: DenyCapV2Fields<T0>) {
    this.$fullTypeName = composeSuiType(
      DenyCapV2.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::coin::DenyCapV2<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.allowGlobalPause = fields.allowGlobalPause;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): DenyCapV2Reified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: DenyCapV2.$typeName,
      fullTypeName: composeSuiType(
        DenyCapV2.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V31}::coin::DenyCapV2<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: DenyCapV2.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => DenyCapV2.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => DenyCapV2.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => DenyCapV2.fromBcs(T0, data),
      bcs: DenyCapV2.bcs,
      fromJSONField: (field: any) => DenyCapV2.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => DenyCapV2.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => DenyCapV2.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => DenyCapV2.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => DenyCapV2.fetch(client, T0, id),
      new: (fields: DenyCapV2Fields<ToPhantomTypeArgument<T0>>) => {
        return new DenyCapV2([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return DenyCapV2.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<DenyCapV2<ToPhantomTypeArgument<T0>>>> {
    return phantom(DenyCapV2.reified(T0));
  }
  static get p() {
    return DenyCapV2.phantom;
  }

  static get bcs() {
    return bcs.struct("DenyCapV2", {
      id: UID.bcs,
      allow_global_pause: bcs.bool(),
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): DenyCapV2<ToPhantomTypeArgument<T0>> {
    return DenyCapV2.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      allowGlobalPause: decodeFromFields("bool", fields.allow_global_pause),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): DenyCapV2<ToPhantomTypeArgument<T0>> {
    if (!isDenyCapV2(item.type)) {
      throw new Error("not a DenyCapV2 type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return DenyCapV2.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      allowGlobalPause: decodeFromFieldsWithTypes("bool", item.fields.allow_global_pause),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): DenyCapV2<ToPhantomTypeArgument<T0>> {
    return DenyCapV2.fromFields(typeArg, DenyCapV2.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      allowGlobalPause: this.allowGlobalPause,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): DenyCapV2<ToPhantomTypeArgument<T0>> {
    return DenyCapV2.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      allowGlobalPause: decodeFromJSONField("bool", field.allowGlobalPause),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): DenyCapV2<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== DenyCapV2.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(DenyCapV2.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return DenyCapV2.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): DenyCapV2<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDenyCapV2(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a DenyCapV2 object`);
    }
    return DenyCapV2.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): DenyCapV2<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isDenyCapV2(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a DenyCapV2 object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return DenyCapV2.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return DenyCapV2.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<DenyCapV2<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching DenyCapV2 object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isDenyCapV2(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a DenyCapV2 object`);
    }

    return DenyCapV2.fromSuiObjectData(typeArg, res.data);
  }
}
